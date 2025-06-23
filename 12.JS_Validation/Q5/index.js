function isNumber(val) {
  return typeof val === 'number' && !isNaN(val);
}

console.log(isNumber(42));      
console.log(isNumber("42"));   
console.log(isNumber(NaN));  
