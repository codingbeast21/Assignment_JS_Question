function NoOfOcc(str, char){
    let cnt=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===char){
            cnt++;
        }
    }
    return cnt;
}

console.log(NoOfOcc("w3resource.com", 'r' ));
