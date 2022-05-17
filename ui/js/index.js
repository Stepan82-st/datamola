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
const getFromLocalStorage = (key) => {
   return JSON.parse(localStorage.getItem(key));
}

class UserList {
   static users = [];
   static currentUser;

   static addUser(user, password) {
      return this.users.push(new User(user, password));
   }

   static setCurrentUser(username) {
      localStorage.setItem('currentUser', JSON.stringify(username));
   }

   static getCurrentUser() {
      return getFromLocalStorage('currentUser');
   }
}

if (!JSON.parse(localStorage.getItem('currentUser')))
   localStorage.setItem('currentUser', JSON.stringify('Stepan'));

// eslint-disable-next-line no-unused-vars
class HeaderView {
   constructor(idUser) {
      this.containerId = idUser;
   }
   display() {
      const header = document.getElementById(this.containerId);
      const btnRegister = document.getElementById('btn-register');
      header.innerHTML = `<h2>${JSON.parse(localStorage.getItem('currentUser'))}</h2>`;
      if (JSON.parse(localStorage.getItem('currentUser'))) {
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
         (item.author === JSON.parse(localStorage.getItem('currentUser'))) ?
         ` <article id="some-tweet" class="tweet-wrap">
           <div class="tweet-header">
             <div class="tweet-header-info" id = "${item.id}">
           <span class="name-autor">${item.author}</span>
           <span class="data-message">${item.createdAt.toLocaleString()}</span>
               <p class="text-message">🔥${item.text}</p> 
             </div>
           </div>
           <div class="tweet-info-counts">
             <div class="comments" id="${item.id}">
               <svg class="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
               <div class="comment-count">${item.comments.length}</div>
             </div>
            
           </div>
           <button id="${item.id}" type="button" name="delete" class="btn delete-btn">Delete</button>
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
           <div class="comments" id="${item.id}">
             <svg class="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
             <div class="comment-count">${item.comments.length}</div>
           </div>
           
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
   display(tweetId) {
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
         <button id="addCom" type="button">
           Add comment
         </button>
       </div>
     </div>
   </div>
     `
      }
   }
}

const formFilter = document.formfilter;
const formFilterLineHashtags = [];
const btnAddHashtags = document.getElementById('btn-hashtags');
btnAddHashtags.addEventListener('click', function () {
   formFilterLineHashtags.push(formFilter.hashtags.value);

   return formFilterLineHashtags;
});
class FilterView {
   constructor(idPage) {
      this.containerId = idPage;
   }
   display(params, from, count) {
      from = 0;
    count = 10;
      // console.log(formFilterLineHashtags)
      const newParams = params.filter(item => {
         let filterAuthor, filterText, filterDateTo, filterDateFrom, filterHashtags;
         filterAuthor = filterText = filterDateTo = filterDateFrom = filterHashtags = true;
         if (formFilter.username.value) {
            filterAuthor = item.author.toUpperCase().includes(formFilter.username.value.toUpperCase())
         }
         if (formFilter.text.value) {
            filterText = item.text.toUpperCase().includes(formFilter.text.value.toUpperCase())
         }
         if (formFilter.dateFrom.value) {
            filterDateFrom = item.createdAt >= formFilter.dateFrom.value;
         }
         if (formFilter.dateTo.value) {
            filterDateTo = item.createdAt <= formFilter.dateTo.value;
         }
         if (formFilterLineHashtags.length > 0) {

            filterHashtags = formFilterLineHashtags.every(elem => item.text.toUpperCase().includes(elem.toUpperCase()));
         }
         // console.log('filter', filterAuthor, filterHashtags);

         return filterAuthor && filterText && filterDateFrom && filterDateTo && filterHashtags;
      })

      return new TweetFeedView(this.containerId).display(newParams.slice(from, count));
   }
}
class TweetController {

   constructor() {
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

   editTweet() {
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
   static showTweet(id) {
      this.tweetView.display(id);
   }
   static save() {
      return localStorage.setItem(`tweets`, JSON.stringify(TweetController.tweets));
   }
   static restore() {
      return new TweetCollection(JSON.parse(localStorage.getItem(`tweets`)));
   }

}

const tweetCollectionController = new TweetController();

const tweetsConteiner = document.getElementById('tweets');
const pageTweet = document.getElementById('pageTweet');
const singIn = document.getElementById('sing-in');
const myArt = document.getElementById('tweet-body');
const conteinerPage = document.getElementById('main');
const conteinerFilter = document.getElementById('filter');
const btnSingOut = document.getElementById('btn-register');
const btnDeleteMyTweet = document.getElementById('delete-tweet');
const btnEditMyTweet = document.getElementById('edit-tweet');
const btnLoadMore = document.getElementById('load-more');
const btnAddTweet = document.querySelector('.tweet-btn');
const myFormAddTweet = document.formtweetadd;

class TweetFeedApiService {
    
   async getData() {     
      try {
         let from = 0,
             count = 10;
         const response = await fetch(`https://jslabapi.datamola.com/tweet/?from&count`);
         const result = await response.json();
         tweetCollectionController.tweetFeedView.display(result.slice(from, count));
     
         const loadMore = document.getElementById('load-more');
         
         loadMore.addEventListener('click', function(){
           from += 10;
           count +=10;
            tweetCollectionController.tweetFeedView.display(result.slice(from, count));
         });
        
         const btnDeleteMyTweet = document.querySelectorAll('.delete-btn');
         for (let i = 0; i < btnDeleteMyTweet.length; i++) {
            btnDeleteMyTweet[i].addEventListener('click', function (e) {
               TweetFeedApiService.deleteTweet(`https://jslabapi.datamola.com/tweet/${ e.currentTarget.id}`)
               tweetFeedApiService.getData();
            })
         }
         const btnEditTweet = document.querySelectorAll('.tweet-header-info');
         const formTweetEdit = document.getElementById('tweet-conteiner');
         const comments = document.querySelectorAll('.comments');
         for (let i = 0; i < comments.length; i++) {
            comments[i].addEventListener('click', function (e) {
               let tweet = result.find(elem => e.currentTarget.id === elem.id);
               tweetCollectionController.tweetView.display(tweet);
               if(tweet.author !== JSON.parse(localStorage.getItem('currentUser'))){
                  localStorage.setItem('tweetId', JSON.stringify(`${tweet.id}`));
                  const btnAddComment = document.querySelector('.pull-right');
                  let postComment = document.querySelector('.commentar');
                  btnAddComment.addEventListener('click', function () {
                     TweetFeedApiService.postTweetAddComment(`https://jslabapi.datamola.com/tweet/${ JSON.parse(localStorage.getItem('tweetId'))}/comment`, {
                           "text": postComment.value
                        })
                        .then((data) => {
                           if (data) {
                              console.log(data);
                              postComment.value = '';
                              tweetCollectionController.tweetView.display(data);
                           }
                        })
                  })

               }
            })
         }

         for (let i = 0; i < btnEditTweet.length; i++) {
            btnEditTweet[i].addEventListener('click', function (e) {
               let tweet = result.find(elem => e.currentTarget.id === elem.id);

               if (tweet.author === JSON.parse(localStorage.getItem('currentUser'))) {
                  localStorage.setItem('idMyTweet', JSON.stringify(tweet.id));
                  formTweetEdit.value = tweet.text;

                  btnAddTweet.classList.remove("tweet-btn");
                  btnAddTweet.classList.add("edit-btn");
                  btnAddTweet.innerHTML = 'Edit';
                  let btnNewEditTweetAdd = document.querySelector('.edit-btn');
                  btnNewEditTweetAdd.addEventListener('click', function () {
                     if (document.querySelector('.tweet-btn')) {
                        return;
                     }
                     TweetFeedApiService.editTweet(`https://jslabapi.datamola.com/tweet/${ JSON.parse(localStorage.getItem('idMyTweet'))}`, {
                           "text": formTweetEdit.value
                        })
                        .then((data) => {
                           if (data) {
                              formTweetEdit.value = '';
                              btnAddTweet.innerHTML = 'Tweet';
                              btnAddTweet.classList.add("tweet-btn");
                              btnAddTweet.classList.remove("edit-btn");
                              tweetFeedApiService.getData();
                           }
                        })
                  })
               } else if (tweet.author !== JSON.parse(localStorage.getItem('currentUser'))) {

                  tweetCollectionController.tweetView.display(tweet);
                  localStorage.setItem('tweetId', JSON.stringify(`${tweet.id}`));
                  const btnAddComment = document.querySelector('.pull-right');
                  let postComment = document.querySelector('.commentar');
                  btnAddComment.addEventListener('click', function () {
                     TweetFeedApiService.postTweetAddComment(`https://jslabapi.datamola.com/tweet/${ JSON.parse(localStorage.getItem('tweetId'))}/comment`, {
                           "text": postComment.value
                        })
                        .then((data) => {
                           if (data) {
                              console.log(data);
                              postComment.value = '';
                              tweetCollectionController.tweetView.display(data);
                           }
                        })
                  })

               }
            })
         }
      } catch (err) {
         console.log(err)
      }
   }

   async getFilterData() {
      formFilter.hashtags.value = '';
      try {
         const response = await fetch(`https://jslabapi.datamola.com/tweet/?from&count`);
         const result = await response.json();
         tweetCollectionController.filterView.display(result);

      } catch (err) {
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

   static async postTweetAdd(url = '', data = {}) {
      const response = await fetch(url, {
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         mode: 'cors',
         cache: 'no-cache',
         credentials: 'same-origin',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).token
         },
         redirect: 'follow',
         referrerPolicy: 'no-referrer',
         body: JSON.stringify(data)
      });
      if (response.ok) {
         return await response.json();
      } else {
         console.log('error', response.status)
      }
   }

   static async editTweet(url = '', data = {}) {
      const response = await fetch(url, {
         method: 'PUT', // *GET, POST, PUT, DELETE, etc.
         mode: 'cors',
         cache: 'no-cache',
         credentials: 'same-origin',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).token
         },
         redirect: 'follow',
         referrerPolicy: 'no-referrer',
         body: JSON.stringify(data)
      });
      if (response.ok) {
         return await response.json();
      } else {
         console.log('error', response.status)
      }
   }

   static async editComment(url = '', data = {}) {
      const response = await fetch(url, {
         method: 'PUT', // *GET, POST, PUT, DELETE, etc.
         mode: 'cors',
         cache: 'no-cache',
         credentials: 'same-origin',
         headers: {
            'Content-Type': 'application/json',
            'commentId': JSON.parse(localStorage.getItem('commentId')),
            'tweetId': JSON.parse(localStorage.getItem('tweetId')),
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).token
         },
         redirect: 'follow',
         referrerPolicy: 'no-referrer',
         body: JSON.stringify(data)
      });
      if (response.ok) {
         return await response.json();
      } else {
         console.log('error', response.status)
      }
   }

   static async deleteTweet(url = '', data = {}) {
      const response = await fetch(url, {
         method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
         mode: 'cors',
         cache: 'no-cache',
         credentials: 'same-origin',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).token
         },
         redirect: 'follow',
         referrerPolicy: 'no-referrer',
         body: JSON.stringify(data)
      });
      if (response.ok) {
         return;
      } else {
         console.log('error', response.status)
      }
   }

   static async postTweetAddComment(url = '', data = {}) {
      const response = await fetch(url, {
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         mode: 'cors',
         cache: 'no-cache',
         credentials: 'same-origin',
         headers: {
            'Content-Type': 'application/json',
            'tweetId': JSON.parse(localStorage.getItem('tweetId')),
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).token
         },
         redirect: 'follow',
         referrerPolicy: 'no-referrer',
         body: JSON.stringify(data)
      });
      if (response.ok) {
         return await response.json();
      } else {
         console.log('error', response.status)
      }
   }

}
const tweetFeedApiService = new TweetFeedApiService();
btnSingOut.addEventListener('click', openPageSingin);

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
  
      <button type="button" class="loginbtn">LogIn</button>
      <button class='ps' id="btn-register-singin">Register</button>
    </div>
    </form>
    </div>
`;

   function getNewUser(event) {
      //event.preventDefault();
      let inputUserSing = document.formsingin;
      UserList.setCurrentUser(inputUserSing.uname.value, inputUserSing.psw.value);
      tweetFeedApiService.postLogin('https://jslabapi.datamola.com/login', {
            "login": `${inputUserSing.uname.value}`,
            "password": `${inputUserSing.psw.value}`
         })
         .then((data) => {
            if (data) {
               localStorage.setItem('token', JSON.stringify(data));
               window.location.href = 'main.html';
            } else {
               console.log('error', data);
            }
         })

   }
   const btnRegisterSingin = document.getElementById('btn-register-singin');
   btnRegisterSingin.addEventListener('click', openPageRegister);
   btnRegisterSingin.removeEventListener('click', openPageSingin);
   const btnLogin = document.querySelector('.loginbtn');
   btnLogin.addEventListener('click', getNewUser, false);
}

btnAddTweet.addEventListener('click', function () {
   if (document.querySelector('.edit-btn')) {
      return;
   }
   TweetFeedApiService.postTweetAdd('https://jslabapi.datamola.com/tweet', {
         "text": myFormAddTweet.text.value
      })
      .then((data) => {

         if (data) {
            myFormAddTweet.text.value = '';
            tweetFeedApiService.getData();
         }
      })
});

tweetFeedApiService.getData();
const btnFind = document.getElementById('btn-find');
btnFind.addEventListener('click', tweetFeedApiService.getFilterData, false);

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
              
              <button type="button" class="registerbtn">Register</button>
              <button class='psw' id="btn-singin-register">Sing in</button>
            </div>
          </form>
        </div>
        `

   function setNewUser(event) {
      // event.preventDefault();
      let inputUserRegister = document.formregister;
      if (inputUserRegister.password.value === inputUserRegister.passwordrepeat.value)
         UserList.setCurrentUser(inputUserRegister.name.value, inputUserRegister.password.value);
      tweetFeedApiService.postLogin('https://jslabapi.datamola.com/registration', {
            "login": `${inputUserRegister.name.value}`,
            "password": `${inputUserRegister.password.value}`
         })
         .then((data) => {
            console.log(data);
         })
      openPageSingin();
   }
   const btnSinginRegister = document.getElementById('btn-singin-register');
   btnSinginRegister.addEventListener('click', openPageSingin);
   btnSinginRegister.removeEventListener('click', openPageRegister);
   const btnAddNewUser = document.querySelector('.registerbtn');
   btnAddNewUser.addEventListener('click', setNewUser, false);
}