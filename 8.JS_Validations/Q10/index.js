function isAlphanumeric(str) {
  return /^[a-z0-9]+$/i.test(str);
}
console.log(isAlphanumeric("abc123")); 