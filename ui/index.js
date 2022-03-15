'use strict'
const tweets = [
    {
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
        author: 'Иванов Иван',
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
        text: 'Привет! #js #datamola',
        createdAt: new Date('2021-07-09T23:00:00'),
        author: 'Калякин Иван',
        comments: []
     },
     {
        id: '8',
        text: 'Привет! #js #datamola',
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
        }]
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
        createdAt: new Date('2022-07-09T23:00:00'),
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
        author: 'show',
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
        text: 'Привет! #js #datamola',
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
        createdAt: new Date('2020-03-03T23:00:00'),
        author: 'Колугин Иван',
        comments: []
   
     }
  ];
  const tweet = {
   id: '1',
   text: 'Привет! #js #datamola',
   createdAt: new Date(),
   author: 'Калякин Иван',
   comments: []

}
const comment = {
   id: '912',
   text: 'Хорошо, а у тебя?',
   createdAt: new Date('2022-03-09T23:00:05'),
   
};
const text = 'hello';
const bedText = "helloo jkjxcjzkjckj kjkjksjfksjkdj ksjdkljfkjskd kjhhhhdfkdl;l; ;l;jkjxcjzkjckjld;slf;l;dl;l ;l;ldssjnkjfnjkn njndsnfjnjsndj jnsjdfnjn hdsbfhbsb sbdhbbshbfbsbf bsbfuyefy sbfkjbdfkjkj sjkfnnjnsk sjnfkjndjknjsdnjnsjnfjkd nsdkjnfjnsjfdnjksn sjndfjnsjfsn jsdnfjdsknfjk jsnfdjndj dsjnfjs";
   const tweetFunc = (function() {
      const user = 'Брыль Степан';
   function getTweets(skip = 0, top = 10, filterConfig) { 
     if(skip >= 0 && skip <= top){
         return  filterTweets(filterConfig)  && tweets.slice(skip, top + skip);
      }else{
     return "invalid parameter";
      }
    }
    function filterTweets(filterConfig) {
      return tweets.filter(tweet => {
        let authorFilter, textFilter, dateFromFilter, dateToFilter, hashtagsFilter;
        authorFilter = textFilter = dateFromFilter = dateToFilter = hashtagsFilter = true;
        if(filterConfig?.author){
         let textRight = tweet.author.toUpperCase();
         let textLeft = filterConfig.author.toUpperCase();
        textFilter = textRight.includes(textLeft);
         }
       if(filterConfig?.text){
        let textRight = tweet.text.toUpperCase();
        let textLeft = filterConfig.text.toUpperCase();
       textFilter = textRight.includes(textLeft);
       }
       if(filterConfig?.dateFrom){
          dateFromFilter = tweet.createdAt <= filterConfig.dateFrom;
       }
       if(filterConfig?.dateTo){
          dateToFilter = tweet.createdAt >= filterConfig.dateTo;
       }
       if(filterConfig?.hashtags){
         hashtagsFilter = filterConfig.hashtags.every(item => tweet.text.includes(item));
       }
       return authorFilter && textFilter && dateFromFilter && dateToFilter && hashtagsFilter;
      })
  }
   const getTweet = (id) => {
   return tweets.find(function(item) {
         if(id)
         return (item.id === id)
     })
    };   
    function validateTweet(tweet){
      if(tweet){
      const isValidComments = Array.isArray(tweet.comments) && (tweet.comments.length === 0 || tweet.comments.every(comment => validateComment(comment)));
         return !!tweet.id && !!tweet.text && !!tweet.author && !!tweet.createdAt?.getMonth && isValidComments;  
  }else{
     return false;
  }
}
  function addTweet (text){
   if(text.length <= 280){
   const date = new Date();
const newTweet =  { id: tweets.length+1,
                    text: text,
                    createdAt: date,
                    author: user,
                    comments:[]};
         tweets.push(newTweet);
       return true;
   }else{
      return false;
        }
};
function editTweet(id, text){
   const tweet = getTweet(id);
   if(tweet.author === user && text.length <= 280){
      tweet.text = text;
   return true;
   }else{
       return false;
   } 
}
function removeTweet(id){
 const tweet = getTweet(id);
 const index = tweets.findIndex(elem => elem.id === id);
 if (index !== -1 && tweet.author === user){
     tweets.splice(index, 1); 
return true;
}else{
    return false;
}  
}
function validateComment(com){   
return !!com && !!com.id && !!com.text && !!com.createdAt?.getMonth && !!com.author;
}
function changeUser(name){
   user = name;
return user;
}
function addComment(id, text){
   const tweet = getTweet(id);
   const date = new Date();
   if(tweet && text.length <= 280){
   const newComment =  { 
       id: tweets.length+1,
           text: text,
           createdAt: date,
           author: user
   };
   tweet.comments.push(newComment);
       return true;
   }else{
       return false;
   }
}
   return {getTweets, getTweet, validateTweet, addTweet, editTweet, removeTweet, validateComment, changeUser, addComment};
  }());
 

console.log(tweetFunc.getTweets(0, 15, {text:'Привет'}));
console.log(tweetFunc.getTweets(10, 10));
console.log(tweetFunc.getTweets(10, 1));
console.log(tweetFunc.editTweet('2', text));
console.log(tweetFunc.editTweet('2', bedText));
console.log(tweetFunc.validateTweet(tweet));
console.log(tweetFunc.validateComment(comment));
console.log(tweetFunc.removeTweet('2'));
console.log(tweetFunc.removeTweet("3"));
console.log(tweetFunc.addTweet(text));
console.log(tweetFunc.addComment('1', text));
console.log(tweetFunc.addComment('1', bedText));
console.log(tweets);
