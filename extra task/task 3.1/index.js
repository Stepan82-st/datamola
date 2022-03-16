function sumMaxArr (arr){
   let resArr = arr[0];
   let count = 0;
   for (let i of arr) {
     count += i; 
     resArr = Math.max(resArr, count); 
     if (count < 0)
         count = 0; 
   }
   return resArr; 
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const are = [-1]
console.log(sumMaxArr(arr));
console.log(sumMaxArr(are));