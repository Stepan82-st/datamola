const arr1 = [7,1,5,3,6,4]
const arr = [1,2,3,4,5];
function relise(arr){
   let count = 0;
   let res;
   for (let i = 0; i < arr.length; i++) {
      res = arr[i+1] - arr[i];
      console.log(res)
      if(res > 0 && res !== NaN){
      count += res;
      }else if(count < 0){
         count = 0;
      }
   }
   return count;
}
function broker(arr){
     let res = [];
   for (let i = 0; i < arr.length; i++){
      if(arr[0] > arr[i+1]){
         res = relise(arr.slice(1));
      }
   if(arr[i] < arr[i+1]){
     res = arr[arr.length-1] - arr[0];
   }
   }
    return res; 
}
console.log(broker(arr1))