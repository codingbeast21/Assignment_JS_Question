function binary(arr, target, s, e){
    let mid=Math.floor((s+e)/2);

    while(s<=e){
        if(arr[mid]===target){
            return mid;
        }
        else if(target>arr[mid]){
           return binary(arr, target, mid+1, e);
        }
        else{
            return binary(arr, target, s, mid-1);
        }
    }
}

console.log(binary([2,4,7,8,10,13,17], 10, 0, 6));