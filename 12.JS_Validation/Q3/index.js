function isNaNValue(val) {
  return typeof val === 'number' && isNaN(val);
}

console.log(isNaNValue(NaN));    
console.log(isNaNValue("NaN"));   
console.log(isNaNValue(123));     
