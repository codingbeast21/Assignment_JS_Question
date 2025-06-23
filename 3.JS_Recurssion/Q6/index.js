function fibonaci(number){
   if(number<=1){
    return 0;
   }
   if(number===2 || number===3){
    return 1;
   }

   return fibonaci(number-1)+fibonaci(number-2);
}

function getFibonacciSeries(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fibonaci(i));
    }
    return result;
}
console.log(getFibonacciSeries(5));