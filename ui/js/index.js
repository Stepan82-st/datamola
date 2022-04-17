/* eslint-disable no-setter-return */
/* eslint-disable no-unused-vars */
'use strict'


class User {
   name;
   password;
 
   constructor(name, password) {
     this.name = name;
     this.password = password;
   }
 }

 const setToLocalStorage = (key, value) => {
   return localStorage.setItem(key, value);
 }
 const getFromLocalStorage = (key) => {
  return  JSON.parse(localStorage.getItem(key));
 }
 const userList = [];
class UserList {
   static users = [];
   static currentUser;

   static addUser(user, password) {    
    return this.users.push(new User(user, password));
   }
 
   static setCurrentUser(username) {
     this.currentUser = this.users.find(user => user.name === username.name);
     if(this.currentUser)
     setToLocalStorage('currentUser', JSON.stringify(this.currentUser));
     return this.currentUser;
   }

   static getCurrentUser(){
     return getFromLocalStorage('currentUser');
   }
}
// eslint-disable-next-line no-unused-vars

class Tweet {
   _id;
   _author;
   text;
   _createdAt;
   comments = [];
   set textParam(newText) {
      if (this._validateText(newText)) {
         this.text = newText;
      } else {
         throw new Error('Tweet text length should be less 280 symbols');
      }
   }
   get textParam() {
      return this.text;
   }
   get id() {
      return this._id;
   }
   get author() {
      return this._author;
   }
   get createdAt() {
      return this._createdAt;
   }
   constructor(options) {
      this.text = options.text || options;
      this._id = options.id || this._uniqueID().toString();
      this._author = options.author || JSON.parse(localStorage.getItem('currentUser')).name;
      this._createdAt = options.createdAt || new Date();
      this.comments = (options.comments) ? options.comments.map((com) => new Comment(com)) : [];
   }
   _validateText(text) {
      return text.length <= 280;
   }

   _uniqueID() {
      return tweets.length + 1;
   }

   static validate(tweet) {
      if (tweet) {
         const isValidComments = Array.isArray(tweet.comments) && (tweet.comments.length === 0 || tweet.comments.every(comment => Comment.validate(comment)));
         return !!tweet.id && !!tweet.text && !!tweet.author && !!tweet.createdAt?.getMonth && isValidComments;
      } else {
         return false;
      }
   }
}

class Comment {
   text;
   set textCom(newText) {
      if (this._validateText(newText)) {
         this.text = newText;
      } else {
         throw new Error('Comment text length should be less 280 symbols')
      }
   }
   get textCom() {
      return this.text;
   }
   get id() {
      return this._id;
   }
   get author() {
      return this._author;
   }
   get createdAt() {
      return this._createdAt;
   }
   constructor(options) {
      this.text = options.text || options;
      this._id = options.id || this._uniqueID().toString();
      this._createdAt = options.createdAt || new Date();
      this._author = options.author || JSON.parse(localStorage.getItem('currentUser')).name;
   }
   _uniqueID() {
      return tweets.length + 1;
   }
   _validateText(text) {
      return text.length <= 280;
   }
   static validate(com) {
      return !!com && !!com.id && !!com.text && !!com.createdAt?.getMonth && !!com.author;
   }
}
if(!JSON.parse(localStorage.getItem('currentUser')))
localStorage.setItem('currentUser', JSON.stringify({name:'Брыль Степан', password:'1234'}));
const _tweetArr = []; // Глобальный массив невалидных твитов;
class TweetCollection {
   _user;
   setnewUser(user) {
      if (user) {
         this._user = user;
      }
      return new Error('No user');
   }
   getnewUser() {
      return this._user;
   }

   constructor(options) {
      this._user = JSON.parse(localStorage.getItem('currentUser')).name;
      this._array = this.addAll(options);
   }

   set array(value) {
      if (!value) {
         return new Error("No value");
      }
      this._array = value;
   }

   get array() {
      return this._array;
   }

   getPage(skip = 0, top = 10, filterConfig = arguments[0]) {
      const sortedTweets = this._array.sort((a, b) => b._createdAt - a._createdAt);

      if (typeof skip !== 'number')
         skip = 0;
      const filterArray = this._filterTweets(filterConfig);
      if (filterConfig) {
         return filterArray.slice(skip, top + skip);
      } else if (skip >= 0 && top && !filterConfig) {
         return sortedTweets.slice(skip, top + skip);
      } else {
         return "invalid parameter";
      }
   }

   _filterTweets(filterConfig) {

      return this._array.filter(tweet => {
         let authorFilter, textFilter, dateFromFilter, dateToFilter, hashtagsFilter;
         authorFilter = textFilter = dateFromFilter = dateToFilter = hashtagsFilter = true;
         if (filterConfig?.author) {
            authorFilter = tweet._author.toUpperCase().includes(filterConfig.author.toUpperCase());
         }
         if (filterConfig?.text) {
            textFilter = tweet.text.toUpperCase().includes(filterConfig.text.toUpperCase());
         }
         if (filterConfig?.dateFrom) {
            dateFromFilter = tweet._createdAt >= filterConfig.dateFrom;
         }
         if (filterConfig?.dateTo) {
            dateToFilter = tweet._createdAt <= filterConfig.dateTo;
         }
         if (filterConfig?.hashtags) {
            hashtagsFilter = filterConfig.hashtags.every(item => tweet.text.includes(item));
         }
         // console.log("filter",tweet, dateFromFilter, dateToFilter);
         return authorFilter && textFilter && dateFromFilter && dateToFilter && hashtagsFilter;
      })
   }


   add(tweet) {
      if (tweet.length <= 280) {
         const newTweet = new Tweet(tweet);
         this._array.push(newTweet);

         return true;
      } else {
         return false;
      }
   }

   edit(id, text) {
      const tweet = this._getTweet(id);
      if (tweet.author === this._user && text.length <= 280) {
         tweet.text = text;
         return true;
      } else {
         return false;
      }
   }

   remove(id) {
      const tweet = this._getTweet(id);
      const index = this._array.findIndex(elem => elem._id === id);
      if (index !== -1 && tweet.author === this._user) {
         this._array.splice(index, 1);
         return true;
      } else {
         return false;
      }
   }

   addComment(id, text) {
      const tweet = this._getTweet(id);
      if (tweet && text.length <= 280) {
         const newComment = new Comment(text)
         tweet.comments.push(newComment);
         return true;
      } else {
         return false;
      }
   }
   _getTweet(id) {
      return this._array.find(function (item) {
         if (id)
            return item._id === id;
      })
   }

   addAll(tweets) {
      const tweetValid = [];
      tweets.map((tw) => {
         if (Tweet.validate(tw)) {
            tweetValid.push(new Tweet(tw));
         } else {
            _tweetArr.push(tw);
         }
      })
      return tweetValid;
   }
   clear(tweetCollection) {
      return tweetCollection.splice();
   }
}

// eslint-disable-next-line no-unused-vars
class HeaderView {
   constructor(idUser) {
      this.containerId = idUser;
   }
   display(nameUser) {
      const header = document.getElementById(this.containerId);
      const btnRegister = document.getElementById('btn-register');
      header.innerHTML = `<h2>${JSON.parse(localStorage.getItem('currentUser')).name}</h2>`;
      if (nameUser) {
         btnRegister.innerText = 'Sing out';
      } else {
         btnRegister.innerText = 'Sing in';
      }
   }
}

class TweetFeedView {
   constructor(idPage) {
      this.containerId = idPage;
   }
   display(params) {
      const conteiner = document.getElementById(this.containerId);
     
      //document.getElementById('pageTweet').style.display = 'none';
      //document.getElementById('tweets').style.display = 'flex';
      conteiner.innerHTML = params.map(item =>
         (item.author === 'Stapan') ? // сравниваем с текущим юзером
         ` <article id="some-tweet" class="tweet-wrap">
           <div class="tweet-header">
             <div class="tweet-header-info" id = "${item.id}">
           <span class="name-autor">${item.author}</span>
           <span class="data-message">${item.createdAt.toLocaleString()}</span>
               <p class="text-message">🔥${item.text}</p> 
             </div>
           </div>
           <div class="tweet-info-counts">
             <div class="comments">
               <svg class="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
               <div class="comment-count">${item.comments.length}</div>
             </div>
             <button id="${item.id}" class="btn message">
               <svg class="feather feather-send sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
             </button>
           </div>
           <button id="${item.id}" type="submit" name="delete" class="btn delete-btn">Delete</button>
           <button id="${item.id}" type="submit" name="Edit" class="btn input-btn edit-btn">Edit</button>
         </article>
         ` :
         `<article id="some-tweet" class="tweet-wrap">
         <div class="tweet-header">
           <div class="tweet-header-info" id = "${item.id}">
         <span class="name-autor">${item.author}</span>
         <span class="data-message">${item.createdAt.toLocaleString()}</span>
             <p class="text-message">🔥${item.text}</p> 
           </div>
         </div>
         <div class="tweet-info-counts">
           <div class="comments">
             <svg class="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
             <div class="comment-count">${item.comments.length}</div>
           </div>
           <button id="${item.id}" class="btn message">
             <svg class="feather feather-send sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
           </button>
         </div>
       </article>
              `
      ).join(`\n`)
   }
}

class TweetView {
   constructor(idPage) {
      this.containerId = idPage;
   }
   display(idTweet) {
      const tweetId = tweetCollection._getTweet(idTweet);
      let myArticle = document.getElementById(this.containerId);
      const countMessage = document.getElementById('count-comments');
      const inputTweet = document.getElementById('tweet-conteiner')
      const conteinTweet = document.getElementById("box-tweet");
      const conteinerAddComment = document.getElementById('conteinerAddComment');
      document.getElementById('pageTweet').style.display = 'flex';
      document.getElementById('tweets').style.display = 'none';
      if (this.containerId === 'pageTweet') {
         inputTweet.style.display = 'none';
         conteinTweet.innerHTML =
            ` <div class="col-md-12" id="fbcomment">
          <div class="body-comment">
            <ul id="list-comment" class="col-md-12"> 
          <span id="${tweetId.id}"  class="name-author">${tweetId.author}</span>
           <span class="data-message">${tweetId.createdAt.toLocaleString()}</span>
           <p class="text-message">
           🔥${tweetId.text}
          </p>
          </ul>
          </div>
        </div>
          `
         countMessage.innerHTML =
            `${tweetId.comments.length}`

         myArticle.innerHTML = tweetId.comments.map(item =>
            (item) ?
            `<li class="box-result" id="${item.id}">
     <div class="result-comment">
       <h4>${item.author}</h4>
       <p>
         ${item.text}
       </p>
       <div class="tools-comment">
         <span class="like">${item.createdAt.toLocaleString()}</span>
       </div>
     </div>
     </li>
   
     ` : []
         ).join(`\n`)
         conteinerAddComment.innerHTML =
            ` <div class="box-comment">
     <textarea
       class="commentar"
       placeholder="Add a comment..."
     ></textarea>
     <div class="bx-post">
       <div class="pull-right">
         <button id="addCom" type="submit">
           Add comment
         </button>
       </div>
     </div>
   </div>
     `
      }
   }
}

class FilterView {
   constructor(idPage) {
      this.containerId = idPage;
   }

   display(inputName, param) {
      inputName.value = param;
      return new TweetFeedView(this.containerId).display({
         author: inputUser.value,
         dateTo: new Date(inputDateTo.value),
         dateFrom: new Date(inputDateFrom.value),
         text: inputTweet.value,
         hashtags: [inputHashtags.value]
      });
   }
}


class TweetController {

   constructor(tweets) {
      this.headerView = new HeaderView('name-user').display(JSON.parse(localStorage.getItem('currentUser')));
      this.tweetFeedView = new TweetFeedView('tweets');
      this.tweetView = new TweetView('pageTweet');
      this.filterView = new FilterView('tweets');
   }
   
   addTweet(text) {
      let newTweets = this.tweetCollection.add(text);
      this.tweetFeedView.display();
      return newTweets;
   }

   editTweet(id) {
      let tweet = this.tweetCollection._getTweet(id)
      const formTweetEdit = document.formtweetadd;
      formTweetEdit.text.value = tweet.text; //tweet.id

      let btnEditTweetAdd = document.getElementById('btn-add-tweet');
      btnEditTweetAdd.id = "new-edit";
      btnEditTweetAdd.innerHTML = 'Edit';
      let btnNewEditTweetAdd = document.getElementById('new-edit');
      btnNewEditTweetAdd.addEventListener('click', function (e) {

         tweet.text = formTweetEdit.text.value;
         console.log(tweet.id, tweet.text);
         tweetCollection.edit(tweet.id, tweet.text);
         let tweetFeelView = new TweetFeedView('tweets');
         tweetFeelView.display();
         formTweetEdit.text.value = '';
         let btnEditTweetAdd = document.getElementById('new-edit');
         console.log(btnEditTweetAdd);
         btnEditTweetAdd.innerHTML = 'Tweet';
         btnEditTweetAdd.id = "btn-add-tweet";
      })
   }
   removeTweet(id) {
      let removeTweets = this.tweetCollection.remove(id);
      this.tweetFeedView.display();
      return removeTweets;
   }
   getFeed(inputName, param) {
      if (typeof inputName === 'number' && typeof param === 'number') {
         this.tweetFeedView.display(inputName, param);
      } else if (!inputName && !param) {
         this.tweetFeedView.display();
      } else if (typeof inputName !== 'number' && typeof param !== 'number') {
         this.filterView.display(inputName, param);
      }
   }
   //используем для отправки твита по его id на страницу tweet; 
   showTweet(id) {
      return this.tweetView.display(id);
   }
   static save() {
      return  localStorage.setItem(`tweets`, JSON.stringify(TweetController.tweets));
      }
      static restore(){
         return new TweetCollection(JSON.parse(localStorage.getItem(`tweets`)));
      }

}

const tweetCollectionController = new TweetController();

const tweetsConteiner = document.getElementById('tweets');
const pageTweet = document.getElementById('pageTweet');
const singIn = document.getElementById('sing-in');
const myArt = document.getElementById('tweet-body');
const inputUser = document.getElementById('input-user');
const inputDateTo = document.getElementById('input-dateto');
const inputTweet = document.getElementById('POST-name');
const inputDateFrom = document.getElementById('input-datefrom');
const inputHashtags = document.getElementById('input-hashtags');
const btnAddHashtags = document.getElementById('btn-hashtags');
const conteinerPage = document.getElementById('main');
const conteinerFilter = document.getElementById('filter');
const btnSingOut = document.getElementById('btn-register');
const btnDeleteMyTweet = document.getElementById('delete-tweet');
const btnEditMyTweet = document.getElementById('edit-tweet');
const btnLoadMore = document.getElementById('load-more');

UserList.addUser('Брыль Степан', '1234');
UserList.addUser('Stepan', '123');
UserList.addUser('Калякин Иван', '1234');



/*
window.addEventListener('load', (event) => {
   btnSingOut.addEventListener('click', openPageSingin);
  // tweetCollectionController.getFeed(0, 10);
   // загрузили твиты на странницу;
   
   let count = 0;

   function addLoadMore() {
      if (document.onclick = btnLoadMore) {
         tweetCollectionController.getFeed(10 + count, 10);

         const btnEditTweet = document.querySelectorAll('.edit-btn');
         for (let i = 0; i < btnEditTweet.length; i++) {
            btnEditTweet[i].addEventListener('click', function (e) {
               count = 0;
               console.log(e.currentTarget.id)
               tweetCollectionController.editTweet(e.currentTarget.id);
            })
         }

         const btnTweetPage = document.querySelectorAll('.message');
         for (var i = 0; i < btnTweetPage.length; i++) {
            btnTweetPage[i].addEventListener("click", function (e) {
               tweetCollectionController.showTweet(e.currentTarget.id);
            });
         }
      }
      count += 10;
   }
   btnLoadMore.addEventListener('click', addLoadMore);
   const btnTweetPage = document.querySelectorAll('.message');
   const btnEditTweet = document.querySelectorAll('.edit-btn');
   for (let i = 0; i < btnEditTweet.length; i++) {
      btnEditTweet[i].addEventListener('click', function (e) {
         tweetCollectionController.editTweet(e.currentTarget.id);
      })
   }

   for (let i = 0; i < btnTweetPage.length; i++) {
      btnTweetPage[i].addEventListener('click', function (e) {
         tweetCollectionController.showTweet(e.currentTarget.id);
         const btnAddComment = document.getElementById('addCom');
         btnAddComment.addEventListener('click', addComment, false);
      });
   }

   function addComment(event) {
      const pageComment = document.querySelector('.commentar');
      let comment = new Comment(pageComment.value);
      const myTweet = document.querySelector('.name-author').id;
      let tweet = tweetCollection._getTweet(myTweet);
      tweet.comments.push(comment);
      tweetCollectionController.showTweet(myTweet);
      const btnAddComment = document.getElementById('addCom');
      btnAddComment.addEventListener('click', addComment, false)
   }

   const myFormFilterTweets = document.formfilter;
   const btnFind = document.getElementById('btn-find');

   function getFilterTweets(event) {
      event.preventDefault();
      tweetCollectionController.getFeed(myFormFilterTweets.text, `${myFormFilterTweets.text.value}`) &&
         tweetCollectionController.getFeed(myFormFilterTweets.username, `${myFormFilterTweets.username.value}`) &&
         tweetCollectionController.getFeed(myFormFilterTweets.dateFrom, `${myFormFilterTweets.dateFrom.value}`) &&
         tweetCollectionController.getFeed(myFormFilterTweets.dateTo, `${myFormFilterTweets.dateTo.value}`) &&
         tweetCollectionController.getFeed(myFormFilterTweets.hashtags, [`${myFormFilterTweets.hashtags.value}`]);

      myFormFilterTweets.text.value = '';
      myFormFilterTweets.username.value = '';
      myFormFilterTweets.hashtags.value = '';
   }
   btnFind.addEventListener('click', getFilterTweets, false)
   const myFormAddTweet = document.formtweetadd;

   function getAddTweet(event) {
      event.preventDefault();
      if (document.getElementById('btn-add-tweet')) {
         tweetCollectionController.addTweet(myFormAddTweet.text.value);
         myFormAddTweet.text.value = '';
      }
   }

   // Добавление твита
   let btnAddTweets = document.getElementById('btn-add-tweet');
   btnAddTweets.addEventListener('click', getAddTweet, false);

});

*/
btnSingOut.addEventListener('click', openPageSingin);
const url = 'https://jslabapi.datamola.com/tweet';
  async function getData(){
  try {
    const response = await fetch(url);
    const result = await response.json();     
   tweetCollectionController.tweetFeedView.display(result);
    }
       catch(err){
         console.log(err)
       }

   };  

getData();

class TweetFeedApiService {
    url = 'https://jslabapi.datamola.com/tweet';
  async getData(){
   try {
      const response = await fetch(this.url);
      const result = await response.json();     
     
        console.log(result)
      }
         catch(err){
           console.log(err)
         }
  }

  async postLogin(url = '', data = {}) {
   const response = await fetch(url, {
     method: 'POST', // *GET, POST, PUT, DELETE, etc.
     mode: 'cors', 
     cache: 'no-cache', 
     credentials: 'same-origin', 
     headers: {
       'Content-Type': 'application/json'
     },
     redirect: 'follow', 
     referrerPolicy: 'no-referrer', // no-referrer, *client
     body: JSON.stringify(data) // body data type must match "Content-Type" header
   });
   return await response.json(); 
 }
 
 async postTweetAdd(url = '', data = {}) {
   const response = await fetch(url, {
     method: 'POST', // *GET, POST, PUT, DELETE, etc.
     mode: 'cors', 
     cache: 'no-cache', 
     credentials: 'same-origin', 
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
     },
     redirect: 'follow', 
     referrerPolicy: 'no-referrer', // no-referrer, *client
     body: JSON.stringify(data) // body data type must match "Content-Type" header
   });
   return await response.json(); 
 }

}


//"id"=  "b6a4ca3e-d4c9-49aa-b4f3-1f48461e6ce1"
//"login"= "Stepan Bryl"

const tweetFeedApiService = new TweetFeedApiService();
function openPageSingin() {
   conteinerPage.innerHTML = `
<div id="sing-in">
      <form action="" name="formsingin">
          <div class="contain">
              <h1>Sing in</h1>
                  <hr>
      <label for="uname"><b>Username</b></label>
      <input id="inputUserSing" type="text" placeholder="Enter Username" name="uname" required>
  
      <label for="psw"><b>Password</b></label>
      <input id="inputUserSing" type="password" placeholder="Enter Password" name="psw" required>
  
      <button type="submit" class="loginbtn">LogIn</button>
      <button class='ps' id="btn-register-singin">Register</button>
    </div>
    </form>
    </div>
`;

   const btnRegisterSingin = document.getElementById('btn-register-singin');
   btnRegisterSingin.addEventListener('click', openPageRegister);
   btnRegisterSingin.removeEventListener('click', openPageSingin);
   const btnLogin = document.querySelector('.loginbtn');
   btnLogin.addEventListener('click', getNewUser, false);
}


function getNewUser(event) {
   //event.preventDefault();
     let inputUserSing = document.formsingin;
     UserList.setCurrentUser(inputUserSing.uname.value);
     tweetFeedApiService.postLogin('https://jslabapi.datamola.com/login', { 
      "login": `${inputUserSing.uname.value}`,
     'password':`${inputUserSing.psw.value}`
   })
     .then((data) => {
      if(data){
         console.log(UserList.currentUser.name)
        console.log(data)
         tweetCollectionController.getFeed(0, 10);
      } 
     })
}



function openPageRegister() {
   conteinerPage.innerHTML = `
   <div id="register">
        <form action="main.html" method="post" id="formregister" name="formregister">
            <div class="contain">
              <h1>Register</h1>
              <hr>
              <label for="name"><b>Username</b></label>
              <input id="inputUserRegister" type="text" placeholder="Enter Username" name="name" required>
              
              <label for="password"><b>Password</b></label>
              <input id="inputPasswordRegister" type="password" placeholder="Enter Password" name="password" required>
              
              <label for="passwordrepeat"><b>Repeat Password</b></label>
              <input id="inputPasswordRegisterRepeat" type="password" placeholder="Repeat Password" name="passwordrepeat" required>
              
              <button type="submit" class="registerbtn">Register</button>
              <button class='psw' id="btn-singin-register">Sing in</button>
            </div>
          </form>
        </div>
        `
        
        function setNewUser(event){
         //event.preventDefault();
         const formRegister = document.formregister;
         if(formRegister.password.value === formRegister.passwordrepeat.value){
      UserList.addUser(formRegister.name.value, formRegister.password.value);
      let currentUser = UserList.users.find(user => user.name === inputUserSing.uname.value && user.password === inputUserSing.psw.value);
      UserList.setCurrentUser(currentUser);
      }else{
         return formRegister.passwordrepeat.value = "no repeat password";
      }
      }
   const btnSinginRegister = document.getElementById('btn-singin-register');
   btnSinginRegister.addEventListener('click', openPageSingin);
   btnSinginRegister.removeEventListener('click', openPageRegister);
   const btnAddNewUser = document.querySelector('.registerbtn');
   btnAddNewUser.addEventListener('click', setNewUser, false);
}

/*
   tweetFeedApiService.postTweetAdd('https://jslabapi.datamola.com/tweet', { 
      'text': 'Hello #datamola'
   })
     .then((data) => {
       console.log(data); 
     });
     */