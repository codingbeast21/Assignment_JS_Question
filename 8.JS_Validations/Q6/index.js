function wordCount(str) {
  return str.trim().replace(/\s+/g, ' ').split(' ').filter(w => w !== '').length;
}
console.log(wordCount("  The   quick brown  fox  ")); 