function isPalindromic(str){
    const reversed = str.split('').reverse().join('');
   
    return reversed===str;
}

console.log(isPalindromic("madam"));