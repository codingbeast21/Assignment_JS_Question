function binarySearch(arr, target){
    const size=arr.length;
    let s=0, e=size;
    let mid=(s+e)/2;
    while(s<=e){
        if(target==arr[mid]){
            return mid;
        }
        else if(target<arr[mid]){
            e=mid;
        }
        else{
            s=mid+1;
        }
    }
   return "Not found";
}

console.log(binarySearch([2,4,6,7,9,12], 7));