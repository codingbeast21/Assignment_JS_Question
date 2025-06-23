function countLetters(str){
    const counts={};

    for(let char of str){
        if(counts[char]>0){
            counts[char]++;
        }
        else{
            counts[char]=1;
        }
    }
    return counts;
}

console.log(countLetters("thequickbrownfoxjumpsoverthelazydog"));