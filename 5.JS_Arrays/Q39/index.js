function filter_array_values(arr) {
  return arr.filter(Boolean);
}
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));