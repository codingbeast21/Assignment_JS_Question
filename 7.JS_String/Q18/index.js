function count(str, sub, sensitive = true) {
  const r = new RegExp(sub, sensitive ? 'g' : 'gi');
  return (str.match(r) || []).length;
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the')); 