function merge_array(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))];
}
console.log(merge_array([1, 2, 3], [2, 30, 1])); // [1, 2, 3, 30]
