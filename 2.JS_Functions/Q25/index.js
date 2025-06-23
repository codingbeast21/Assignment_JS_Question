function longestCountry(arr){
    let maxLen=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>arr[maxLen].length){
            maxLen=i;
        }
    }
    return arr[maxLen];
}


let arr=["United Kingdom", "India", "China", "Russia", "United State Of America", "Singapore", "Malasiya"];
console.log(longestCountry(arr));