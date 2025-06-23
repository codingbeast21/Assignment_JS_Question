function isSSN(str) {
  return /^\d{3}-\d{2}-\d{4}$/.test(str);
}
console.log(isSSN("123-45-6789")); 