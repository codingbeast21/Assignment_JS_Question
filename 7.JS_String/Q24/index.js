function truncate(str, words) {
  return str.split(" ").slice(0, words).join(" ");
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));