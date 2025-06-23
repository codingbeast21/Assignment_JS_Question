function alphabetize_string(str) {
  return str.replace(/\s/g, '').split('').sort().join('');
}
console.log(alphabetize_string('United States'));