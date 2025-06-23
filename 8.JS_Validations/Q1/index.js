function isFirstCharUpper(str) {
  return /^[A-Z]/.test(str);
}
console.log(isFirstCharUpper("Hello")); 