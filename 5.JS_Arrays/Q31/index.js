function remove_array_element(arr, value) {
  return arr.filter(item => item !== value);
}
console.log(remove_array_element([2, 5, 9, 6], 5)); // [2, 9, 6]
