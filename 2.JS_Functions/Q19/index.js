function getLargestElement(arr, number){
    let result=[];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>number){
            result.push(arr[i]);
        }
    }
    return result;
}

let numbers = [5, 10, 15, 20, 25];
console.log(getLargestElement(numbers, 10));