function filterValues(arr) {
  return arr.filter(item => typeof item === 'number' && !isNaN(item));
}
console.log(filterValues([NaN, 0, 15, false, -22, '',undefined, 47, null])); // [15, -22, 47]
