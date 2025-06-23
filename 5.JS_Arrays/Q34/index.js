function nthlargest(arr, n) {
  return arr.sort((a, b) => b - a)[n - 1];
}
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)); // 89
