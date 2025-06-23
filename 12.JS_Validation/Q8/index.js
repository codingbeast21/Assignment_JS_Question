function isRegExp(val) {
  return Object.prototype.toString.call(val) === '[object RegExp]';
}

console.log(isRegExp(/abc/));           
console.log(isRegExp("abc"));            
