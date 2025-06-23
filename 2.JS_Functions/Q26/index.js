function longestNonRepeted(str){
    let longest="";
    for(let i=0;i<str.length;i++){
        let seen="";
        for(let j=i;j<str.length;j++){
            if(seen.includes(str[j])){
                break;
            }
            seen+=str[j];
        }

 if(seen.length> longest.length){
    longest=seen;
     }
  }
  return longest;
}

console.log(longestNonRepeted("abcabcbb"));