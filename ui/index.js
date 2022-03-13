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
       createdAt: new Date('2022-03-08T23:00:01'),
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
        createdAt: new Date('2022-03-07T23:00:00'),
        author: 'Иванов Степан',
        comments: []
   
     },
     {
        id: '4',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Николаев Иван',
        comments: []
   
     },
     {
        id: '5',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Иванов Иван',
        comments: []
   
     },
     {
        id: '6',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Николаев Иван',
        comments: [{
            id: '111',
           text: 'Хорошо, а у тебя?',
           createdAt: new Date('2022-03-09T23:00:05'),
           author: 'Иванов Иван'
        }]
   
     },
     {
        id: '7',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Калякин Иван',
        comments: []
   
     },
     {
        id: '8',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Николаев Иван',
        comments: []
   
     },
     {
        id: '9',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Малякин Иван',
        comments: []
   
     },
     {
        id: '10',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Калякин Иван',
        comments: []
   
     },
     {
        id: '11',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Малякин Иван',
        comments: []
   
     },
     {
        id: '12',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Колугин Иван',
        comments: [{
            id: '100',
               text: 'Хорошо, а у тебя?',
               createdAt: new Date('2022-03-09T23:00:05'),
               author: 'Иванов Иван' 
        },
        {
        id: '101',
        text: 'Хорошо, а у тебя?',
        createdAt: new Date('2022-03-09T23:00:05'),
        author: 'Иванов Иван'
        }]
   
     },
     {
        id: '13',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Иванов Иван',
        comments: []
   
     },
     {
        id: '14',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Калякин Иван',
        comments: []
   
     },
     {
        id: '15',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Малякин Иван',
        comments: []
   
     },
     {
        id: '16',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'show',
        comments: []
   
     },
     {
        id: '17',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Калякин Иван',
        comments: []
   
     },
     {
        id: '18',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-07T23:00:00'),
        author: 'Колугин Иван',
        comments: []
   
     },
     {
        id: '19',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-08T23:00:00'),
        author: 'Николаев Иван',
        comments: []
   
     },
     {
        id: '20',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2022-03-09T23:00:00'),
        author: 'Колугин Иван',
        comments: []
   
     }
  ];

   const tweetFunc = (function() {
      const user = 'Stepan Bryl'
   function getTweets(skip = 0, top = 10, filterConfig) { 
     if(filterConfig && skip >= 0 && skip <= top){
   
         return tweets.slice(skip, top + skip) && filterTweets(filterConfig);
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
      const isValidComments = Array.isArray(tweet.comments) && (tweet.comments.length === 0 || tweet.comments.every(comment => !!comment.id && !!comment.text && 
          !!comment.createdAt?.getMonth && !!comment.author));
         return !!tweet.id && !!tweet.text && !!tweet.author && !!tweet.createdAt?.getMonth && isValidComments;  
  }else{
         return "No tweet";
  }
  }
   return {getTweets, getTweet, validateTweet};
  }());
 
