function isSameType(a, b) {
  return typeof a === typeof b;
}

console.log(isSameType(123, 456));       
console.log(isSameType("abc", 123));     
