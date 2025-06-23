function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function calculate(a, b, operation) {
  return operation(a, b); 
}

console.log(calculate(5, 3, add));    