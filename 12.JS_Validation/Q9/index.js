function isChar(val) {
  return typeof val === 'string' && val.length === 1;
}

console.log(isChar('a'));    
console.log(isChar('abc'));
