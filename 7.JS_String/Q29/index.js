function search_word(str, word) {
  const count = str.split(' ').filter(w => w === word).length;
  return `'${word}' was found ${count} times.`;
}
console.log(search_word('The quick brown fox', 'fox'));