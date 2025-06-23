function longestWord(str){
    const words = str.match(/\w+/g);
    let longestWord ='';
    for(word of words){
        if(word.length > longestWord.length){
            longestWord= word;
        }
    }
    return longestWord;
}

console.log(longestWord("Web Development Tutorial"));