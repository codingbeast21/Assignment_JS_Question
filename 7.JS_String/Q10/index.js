function swapcase(str) {
  return str.split('').map(c =>
    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
  ).join('');
}
console.log(swapcase('AaBbc')); 