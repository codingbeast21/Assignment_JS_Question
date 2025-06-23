function isPureJsonObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}

console.log(isPureJsonObject({}));        
console.log(isPureJsonObject([]));         
console.log(isPureJsonObject(new Date())); 
