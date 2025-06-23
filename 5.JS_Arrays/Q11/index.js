function sumOfSquares(vector) {
  let sum = 0;
  for (let i = 0; i < vector.length; i++) {
    sum += vector[i] * vector[i]; 
  }
  return sum;
}


let numbers = [1, 2, 3, 4, 5];
console.log("Sum of squares:", sumOfSquares(numbers));
