function secondSmallHigh(arr){
   if(arr.length < 2){
    return "arryay must contain at least 2 numbers";
   }

   arr.sort();
   const secondLowest = arr[1];
   const secondHighest = arr[arr.length-2];

   return {secondLowest, secondHighest};
}

console.log(secondSmallHigh([2,5,1,6,9,0,4]));