function countVowel(str){
    const vowels= str.match(/[aeiou]/gi)

    return vowels ? vowels.length : 0;
}

console.log(countVowel("The quick brown fox"));