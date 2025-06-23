function remove_first_occurrence(str, search) {
  return str.replace(search, '');
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));