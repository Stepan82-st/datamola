/* eslint-disable no-setter-return */
/* eslint-disable no-unused-vars */
'use strict'

const tweets = [{
      id: '1',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2022-03-09T23:00:00'),
      author: 'Калякин Иван',
      comments: []
   },
   {
      id: '2',
      text: 'Какие дела?',
      createdAt: new Date('2022-03-02T23:00:01'),
      author: 'Брыль Степан',
      comments: [{
         id: '912',
         text: 'Хорошо, а у тебя?',
         createdAt: new Date('2022-03-09T23:00:05'),
         author: 'Иванов Иван'
      }]
   },
   {
      id: '3',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2022-03-01T23:00:00'),
      author: 'Иванов Степан',
      comments: []
   },
   {
      id: '4',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2021-10-09T23:00:00'),
      author: 'Николаев Иван',
      comments: []
   },
   {
      id: '5',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2021-09-09T23:00:00'),
      comments: []
   },
   {
      id: '6',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2021-08-09T23:00:00'),
      author: 'Николаев Иван',
      comments: [{
         id: '111',
         text: 'Хорошо, а у тебя?',
         createdAt: new Date('2021-10-09T23:00:05'),
         author: 'Иванов Иван'
      }]
   },
   {
      id: '7',
      text: 'Дела! #js #datamola',
      createdAt: new Date('2021-07-09T23:00:00'),
      author: 'Калякин Иван',
      comments: []
   },
   {
      id: '8',
      text: 'Дела! #js #datamola',
      createdAt: new Date('2021-06-09T23:00:00'),
      author: 'Николаев Иван',
      comments: []
   },
   {
      id: '9',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2021-05-09T23:00:00'),
      author: 'Малякин Иван',
      comments: []
   },
   {
      id: '10',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2021-04-09T23:00:00'),
      author: 'Калякин Иван',
      comments: []

   },
   {
      id: '11',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2021-03-09T23:00:00'),
      author: 'Малякин Иван',
      comments: []

   },
   {
      id: '12',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2020-09-09T23:00:00'),
      author: 'Колугин Иван',
      comments: [{
            id: '100',
            text: 'Хорошо, а у тебя?',
            createdAt: new Date('2020-10-19T23:00:05'),
            author: 'Иванов Иван'
         },
         {
            id: '101',
            text: 'Хорошо, а у тебя?',
            createdAt: new Date('2020-10-09T23:00:05'),
            author: 'Иванов Иван'
         }
      ]
   },
   {
      id: '13',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2020-08-09T23:00:00'),
      author: 'Иванов Иван',
      comments: []
   },
   {
      id: '14',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2020-07-09T23:00:00'),
      author: 'Брыль Степан',
      comments: []
   },
   {
      id: '15',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2020-06-09T23:00:00'),
      author: 'Малякин Иван',
      comments: []
   },
   {
      id: '16',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2020-05-11T23:00:00'),
      author: 'Брыль Степан',
      comments: []
   },
   {
      id: '17',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2020-04-09T23:00:00'),
      author: 'Калякин Иван',
      comments: []
   },
   {
      id: '18',
      text: 'Привет! #hi #datamola',
      createdAt: new Date('2020-03-10T23:00:00'),
      author: 'Колугин Иван',
      comments: []
   },
   {
      id: '19',
      text: 'Привет! #hi #datamola',
      createdAt: new Date('2020-03-08T23:00:00'),
      author: 'Николаев Иван',
      comments: []

   },
   {
      id: '20',
      text: 'Привет! #js #datamola',
      createdAt: new Date('2020-03-02T23:00:00'),
      author: 'Колугин Иван',
      comments: []

   }
];
//const tweet = {
// id: '1',
// text: 'Привет! #js #datamola',
// createdAt: new Date(),
//  author: 'Калякин Иван',
// comments: []
//};
/* const badTweet = {
   id: '1',
   text: 'Привет! #js #datamola',
   author: 'Калякин Иван',
   comments: []
};
const comment = {
   id: '912',
   text: 'Хорошо, а у тебя?',
   createdAt: new Date('2022-03-09T23:00:05'),
   author: 'Брыль Степан'
};
const badComment = {
   id: '912',
   text: 'Хорошо, а у тебя?',
   createdAt: new Date('2022-03-09T23:00:05')
};
const text = 'hello';
const badText = "helloo jkjxcjzkjckj kjkjksjfksjkdj ksjdkljfkjskd kjhhhhdfkdl;l; ;l;jkjxcjzkjckjld;slf;l;dl;l ;l;ldssjnkjfnjkn njndsnfjnjsndj jnsjdfnjn hdsbfhbsb sbdhbbshbfbsbf bsbfuyefy sbfkjbdfkjkj sjkfnnjnsk sjnfkjndjknjsdnjnsjnfjkd nsdkjnfjnsjfdnjksn sjndfjnsjfsn jsdnfjdsknfjk jsnfdjndj dsjnfjs";
const tweetFunc = (function () {
  
  
   function getTweets(skip = 0, top = 10, filterConfig) {
      const sortedTweets = tweets.sort((a, b) => b.createdAt - a.createdAt);
      const filterAr = filterTweets(filterConfig);
      if(skip >= 0 && skip <= top && filterConfig){
         return filterAr && filterAr.slice(skip, top + skip);
      }else if(!filterConfig && skip >= 0 && skip <= top){
         return sortedTweets.slice(skip, top + skip);
      }else{
         return "invalid parameter";
      }
   }

   function filterTweets(filterConfig) {
      return tweets.filter(tweet => {
         let authorFilter, textFilter, dateFromFilter, dateToFilter, hashtagsFilter;
         authorFilter = textFilter = dateFromFilter = dateToFilter = hashtagsFilter = true;
         if (filterConfig?.author) {
            authorFilter = tweet.author.toUpperCase().includes(filterConfig.author.toUpperCase());
         }
         if (filterConfig?.text) {
            textFilter = tweet.text.toUpperCase().includes(filterConfig.text.toUpperCase());
         }
         if (filterConfig?.dateFrom) {
            dateFromFilter = tweet.createdAt >= filterConfig.dateFrom;
         }
         if (filterConfig?.dateTo) {
            dateToFilter = tweet.createdAt <= filterConfig.dateTo;
         }
         if (filterConfig?.hashtags) {
            hashtagsFilter = filterConfig.hashtags.every(item => tweet.text.includes(item));
         }
        // console.log('filter', tweet, textFilter, authorFilter)
         return authorFilter && textFilter && dateFromFilter && dateToFilter && hashtagsFilter;
      })
   }
   const getTweet = (id) => {
      return tweets.find(function (item) {
         if (id)
            return (item.id === id)
      })
   };

   function validateTweet(tweet) {
      if (tweet) {
         const isValidComments = Array.isArray(tweet.comments) && (tweet.comments.length === 0 || tweet.comments.every(comment => validateComment(comment)));
         return !!tweet.id && !!tweet.text && !!tweet.author && !!tweet.createdAt ?.getMonth && isValidComments;
      } else {
         return false;
      }
   }

   function addTweet(text) {
      if (text.length <= 280) {
         const date = new Date();
         const newTweet = {
            id: (tweets.length + 1).toString(),
            text: text,
            createdAt: date,
            author: user,
            comments: []
         };
         tweets.push(newTweet);
         return true;
      } else {
         return false;
      }
   };

   function editTweet(id, text) {
      const tweet = getTweet(id);
      if (tweet.author === user && text.length <= 280) {
         tweet.text = text;
         return true;
      } else {
         return false;
      }
   }

   function removeTweet(id) {
      const tweet = getTweet(id);
      const index = tweets.findIndex(elem => elem.id === id);
      if (index !== -1 && tweet.author === user) {
         tweets.splice(index, 1);
         return true;
      } else {
         return false;
      }
   }

   function validateComment(com) {
      return !!com && !!com.id && !!com.text && !!com.createdAt ?.getMonth && !!com.author;
   }

   function changeUser(name) {
      user = name;
      return user;
   }

   function addComment(id, text) {
      const tweet = getTweet(id);
      const date = new Date();
      if (tweet && text.length <= 280) {
         const newComment = {
            id: (tweet.comments.length + 101).toString(),
            text: text,
            createdAt: date,
            author: user
         };
         tweet.comments.push(newComment);
         return true;
      } else {
         return false;
      }
   }
   return {
      getTweets,
      getTweet,
      validateTweet,
      addTweet,
      editTweet,
      removeTweet,
      validateComment,
      changeUser,
      addComment
   };
}());
 */
//console.log(tweetFunc.getTweets(0, 10, {dateFrom: new Date('2021-09-09'), dateTo: new Date('2022-09-09')}));
//console.log(tweetFunc.getTweets(0, 15, {
// text: 'дела'
//}));
//console.log(tweetFunc.getTweets(0, 15, {
// author: 'show'
//}));
//console.log(tweetFunc.getTweets(10, 1));
//console.log(tweetFunc.editTweet('16', text));
//console.log(tweetFunc.editTweet('2', badText));
//console.log(tweetFunc.getTweet('2'));
//console.log(tweetFunc.getTweet('21'));
//console.log(tweetFunc.validateTweet(tweet));
//console.log(tweetFunc.validateTweet(badTweet));
//console.log(tweetFunc.removeTweet('2'));
//console.log(tweetFunc.removeTweet('3'));
//console.log(tweetFunc.addTweet(text));
//console.log(tweetFunc.addTweet(badText));
//console.log(tweetFunc.addComment('1', text));
//console.log(tweetFunc.addComment('1', badText));
//console.log(tweetFunc.validateComment(comment));
//console.log(tweetFunc.validateComment(badComment));
//console.log(tweets);

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
         throw new Error('Tweet text length should be less 280 symbols')
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
      this._author = options.author || userThis._user;
      this._createdAt = options.createdAt || new Date();//.toLocaleString()
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
      this._id = options.id;
      this._createdAt = options.createdAt || new Date();
      this._author = options.author || userThis._user;
   }
   _validateText(text) {
      return text.length <= 280;
   }
   static validate(com) {
      return !!com && !!com.id && !!com.text && !!com.createdAt?.getMonth && !!com.author;
   }
}
class TweetCollection {
  _user;
   setnewUser(newFirstName) {
      if (newFirstName) {
         this._user = newFirstName;
      }
      return new Error('No user');
   }
   getnewUser() {
      return this._user;
   }

   constructor(options) {
      this._user = 'Брыль Степан';
      this._array = options;
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
      const sortedTweets = _tweetArr.sort((a, b) => b._createdAt - a._createdAt);
      console.log(filterConfig)
      if(typeof skip !== 'number') 
     skip = 0;
      const filterArray = this._filterTweets(filterConfig);
      console.log(skip, top, filterConfig)
      console.log(filterArray)
      
      if (filterConfig) {
         return filterArray.slice(skip, top + skip);
      } else if (skip >= 0 && skip <= top && !filterConfig) {
         return sortedTweets.slice(skip, top + skip);
      } else {
         return "invalid parameter";
      }
   }
         
   _filterTweets(filterConfig) {
      console.log(filterConfig);
      return _tweetArr.filter(tweet => {
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
         return authorFilter && textFilter && dateFromFilter && dateToFilter && hashtagsFilter;
      })
   }

   
   add(tweet) {
      if (tweet.length <= 280) {
         const newTweet = new Tweet(tweet);
         _tweetArr.push(newTweet);
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
      const index = _tweetArr.findIndex(elem => elem._id === id);
      if (index !== -1 && tweet.author === this._user) {
         _tweetArr.splice(index, 1);
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
      return _tweetArr.find(function (item) {
         if (id)
            return item._id === id;
      })
   }

   addAll(array) {
      const tweetNoValid = [];
      array.map((tw) => {
         if (Tweet.validate(tw)) {
            _tweetArr.push(new Tweet(tw));
         } else {
            tweetNoValid.push(tw);
         }
      })
      return tweetNoValid;
   }
   clear(tweetCollection) {
      return tweetCollection.splice();
   }
}

const userThis = new TweetCollection(); // переменная для хранения имени user;
const _tweetArr = []; // Глобальный массив валидных твитов;
const tweetNoValid = userThis.addAll(tweets); // отсортировал tweets в tweetArr!!!

// eslint-disable-next-line no-unused-vars
class HeaderView {
   constructor(idUser) {
      this.containerId = idUser;
   }
   display(nameUser) {
      const header = document.getElementById(this.containerId);
      const btnRegister = document.getElementById('btn-register');
      header.innerHTML = `<h2>${nameUser}</h2>`;
      if(nameUser){
         btnRegister.innerHTML = 'Sing out';
      }else{
         btnRegister.innerHTML = 'Sing in';
      }
   }
}

// eslint-disable-next-line no-unused-vars
class TweetFeedView {
   constructor(idPage) {
      this.containerId = idPage;
   }
   display(...params) {
      const conteiner = document.getElementById(this.containerId);
      let tweetItog = userThis.getPage(...params);
      conteiner.innerHTML = tweetItog.map(item =>
         (item.author === userThis._user) ? // сравниваем с текущим юзером
         ` <article class="tweet-wrap">
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
             <button class="btn message">
               <svg class="feather feather-send sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
             </button>
           </div>
           <input type="submit" name="delete" class="btn delete-btn" value="Delete">
           <input type="submit" name="Edit" class="btn input-btn edit-btn" value="Edit">
         </article>
         ` :
         `<article class="tweet-wrap">
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
           <button class="btn message">
             <svg class="feather feather-send sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
           </button>
         </div>
       </article>
              `
      ).join(`\n`)
   }
}
// Добавляем твит на страницу твитов с имеющимися коментариями
// или в поле твита для редактирования твита.
class TweetView {
   constructor(idPage) {
      this.containerId = idPage;
   }
   display(idTweet) {
      const tweetId = userThis._getTweet(idTweet);
      let myArticle = document.getElementById(this.containerId);
      const listComments = document.getElementById('list-comment');
      const countMessage = document.getElementById('count-comments');
      const inputTweet = document.getElementById('tweet-conteiner')
      const conteinTweet = document.getElementById("box-tweet");
     
      if(this.containerId === 'comments'){
         show('comments','tweets');
         inputTweet.style.display = 'none';
         conteinTweet.innerHTML = 
          ` <div class="col-md-12" id="fbcomment">
          <div class="body-comment">
            <ul id="list-comment" class="col-md-12"> 
          <span class="name-autor">${tweetId.author}</span>
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
          (item)?
     `<li class="box-result">
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
   <div class="box-comment">
              <textarea
                class="commentar"
                placeholder="Add a comment..."
              ></textarea>
              <div class="bx-post">
                <div class="pull-right">
                  <button onclick="submit_comment()" type="button" value="1">
                    Post
                  </button>
                </div>
              </div>
            </div>
     `:
     []
     ).join(`\n`)
     
   }if(this.containerId === 'tweets'){
      show('tweets','comments');
   
      `${inputTweet.value = tweetId.text}
      `
      if(countMessage)
      countMessage.innerHTML =
     `${tweetId.comments.length}`
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
         createdAt: inputDateTo.value && inputDateFrom.value,
         text: inputTweet.value,
         hashtags: [inputHashtags.value]
      });

   }
}

const myArt = document.getElementById('tweet-body');
const inputUser = document.getElementById('input-user');
const inputDateTo = document.getElementById('input-dateto');
const inputTweet = document.getElementById('POST-name');
const inputDateFrom = document.getElementById('input-datefrom');
const inputHashtags = document.getElementById('input-hashtags');
const btnHashtags = document.getElementById('btn-hashtags');
const btnFind = document.getElementById('btn-find');


function setCurrentUser(name) {
userThis.setnewUser(name);
let showHeader = new HeaderView('name-user');
    if(!name){
       userThis._user = '';
       showHeader.display(userThis._user)
    }else{
       showHeader.display(userThis._user);
}
}

function addTweet(text) {
   let newTweets = userThis.add(text);
   new TweetFeedView('tweets').display();
   return newTweets;
}

function editTweet(id, text){
   let editTweets = userThis.edit(id, text);
   new TweetView('tweets').display(id);
   return editTweets;
}
function removeTweet(id){
   let removeTweets = userThis.remove(id);
   new TweetFeedView('tweets').display();
   return removeTweets;
}
function getFeed(...filterConfig){
 new TweetFeedView('tweets').display(...filterConfig);
return true;
}

//используем для отправки твита по его id на страницу tweet 
//или в поле редактирования main(если он принадлежит user).
function showTweet(idTweet, idPage){
   let tweetView = new TweetView(idPage);
      tweetView.display(idTweet);

}

function show(shown, hidden) {
   document.getElementById(shown).style.display='flex'; /*container-comments*/
   document.getElementById(hidden).style.display='none';
   return false;
 }
 
setCurrentUser('Николаев Иван');
//showTweet('6', 'tweets');
//showTweet('6', 'comments');
//console.log(addTweet('I am doing terrible this job!'));
console.log(editTweet('19', 'I am edit this text!'));
//console.log(removeTweet('14'));
//console.log(removeTweet('4'));
//getFeed(0, 10, {hashtags:['#hi']});
//getFeed(0, 10);
//getFeed({hashtags:['#hi']});
//let tweetFeedView = new TweetFeedView('my-article');
 //tweetFeedView.display();
//let filterView = new FilterView('my-article');
//filterView.display(inputUser,'Брыль Степан');
//let filterView = new FilterView('my-article');
//filterView.display(inputUser, 'Николаев Иван');
//filterView.display(inputHashtags, '#hi');

