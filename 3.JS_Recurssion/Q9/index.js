function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }

    let mid = Math.floor(arr.length/2);

    let left=mergeSort(arr.slice(0, mid));
    let right=mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right){
    if (left.length === 0) return right;
    if (right.length === 0) return left;

     if (left[0] < right[0]) {
        return [left[0]].concat(merge(left.slice(1), right));
    } else {
        return [right[0]].concat(merge(left, right.slice(1)));
    }
}

console.log(mergeSort([2,4,3,7,1,5,2]));