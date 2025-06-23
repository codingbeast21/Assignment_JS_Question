function sumAndProduct(arr){
    let sum=0, mul=1;
    for(let i=0;i<arr.length;i++){
       sum+=arr[i];
       mul*=arr[i];
    }
    return {sum, mul};
}

console.log(sumAndProduct([1,3,5,2,7,8]));