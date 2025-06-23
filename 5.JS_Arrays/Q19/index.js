function sumRow(arr1, arr2){
    let arr3=[];
    for(let i=0;i<Math.max(arr1.length, arr2.length);i++){
        if(arr1[i] && arr2[i]){
          arr3[i]=arr1[i]+arr2[i];
        }
        else if(arr1[i]){
          arr3[i]=arr1[i];
        }
        else{
          arr3[i]=arr2[i];
        }
    }
    return arr3;
}

console.log(sumRow([1,3,5,2,0,4], [2,1,4,5,6]));