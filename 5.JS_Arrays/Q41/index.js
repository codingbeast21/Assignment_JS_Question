function rangeBetwee(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(rangeBetwee(4, 7)); 
console.log(rangeBetwee(-4, 7)); 
