function flattenArray(arr) {
  return arr.reduce((flat, item) => 
    flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
}

function difference(arr1, arr2) {
  const flat1 = flattenArray(arr1);
  const flat2 = flattenArray(arr2);
  const combined = [...flat1, ...flat2];
  const uniqueSet = new Set(combined);
  return Array.from(uniqueSet).map(String);
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
