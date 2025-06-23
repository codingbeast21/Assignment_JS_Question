function longest_common_starting_substring(arr) {
  if (!arr.length) return '';
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
}
console.log(longest_common_starting_substring(['go', 'google'])); // "go"
