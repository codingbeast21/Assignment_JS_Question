function isError(val) {
  return val instanceof Error;
}

console.log(isError(new Error("Oops")));  
console.log(isError("Error"));        
