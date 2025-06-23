function string_chop(str, size = str.length) {
  return str.match(new RegExp(`.{1,${size}}`, 'g'));
}
console.log(string_chop('w3resource')); 
console.log(string_chop('w3resource',2));