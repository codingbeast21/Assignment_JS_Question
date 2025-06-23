function CapFirsLetter(str){
    return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(CapFirsLetter("the quick brown fox"));