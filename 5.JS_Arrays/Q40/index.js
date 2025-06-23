function array_range(start, count) {
  return Array.from({length: count}, (_, i) => start + i);
}
console.log(array_range(1, 4)); 
console.log(array_range(-6, 4)); 