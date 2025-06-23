function isObject(val) {
  return typeof val === 'object' && val !== null && !Array.isArray(val);
}

console.log(isObject({}));        
console.log(isObject(null));    
console.log(isObject([]));         
