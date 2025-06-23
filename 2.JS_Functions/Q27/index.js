function isPalindromic(str){
    let s=0, e=str.length-1;
    let palindromic="";
    while(s<=e){
        if(str[s]===str[e]){
            s++;
            e--;
        }
        else{
            return false;
        }
    }
    return true;

}

function longestPalindromic(str){
    let longest="";
    for(let i=0;i<str.length;i++){
        for(let j=i;j<str.length;j++){
            let substr = str.slice(i,j);
            if(isPalindromic(substr) && substr.length>longest.length){
                longest=substr;
            } 
        }
    }
    return longest;
}

console.log(longestPalindromic("bananas"));