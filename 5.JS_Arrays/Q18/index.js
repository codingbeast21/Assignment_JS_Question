function binarySearch(arr, target){
    let s=0, e=arr.length-1;
    let mid=Math.floor((s+e)/2);

    while(s<=e){
        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid]<target){
            s=mid+1;
        }
        else{
            e=mid-1;
        }
    }
    return "Not find Target";
}

console.log(binarySearch([1,2,4,5,7,8,9,12], 5));