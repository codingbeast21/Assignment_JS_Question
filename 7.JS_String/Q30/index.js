function string_endsWith(str, suffix) {
  return suffix.length > 0 && str.endsWith(suffix);
}
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));