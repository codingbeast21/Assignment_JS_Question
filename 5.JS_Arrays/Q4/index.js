function last(array, n){
  if (!Array.isArray(array)) return [];
  if (n == null) return array[array.length - 1];
  if (n < 0) return [];

  return array.slice(-n);
}
  
console.log(last([7, 9, 0, -2]));  
console.log(last([7, 9, 0, -2],3));  
console.log(last([7, 9, 0, -2],6));