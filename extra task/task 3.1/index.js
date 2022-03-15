function sumMaxArr (arr){
    let resArr = 0,
    count = 0;
    for(let i = 0; i < arr.length; i++){
        count += arr[i];
       resArr = Math.max(resArr, count)
       if(count < 0)
          count = 0; 
       if(resArr < count)
          resArr = count;
    }
   return resArr; 
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(sumMaxArr(arr));