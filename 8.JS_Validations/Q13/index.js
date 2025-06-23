function isUKPostCode(str) {
  return /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i.test(str);
}
console.log(isUKPostCode("SW1A 1AA"));