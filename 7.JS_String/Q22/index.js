function subStrAfterChars(str, char, pos) {
  const index = str.indexOf(char);
  return pos === 'a' ? str.substring(0, index) : str.substring(index + 1);
}
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));