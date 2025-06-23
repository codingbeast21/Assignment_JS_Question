function isUSZipCode(str) {
  return /^\d{5}(-\d{4})?$/.test(str);
}
console.log(isUSZipCode("12345")); 