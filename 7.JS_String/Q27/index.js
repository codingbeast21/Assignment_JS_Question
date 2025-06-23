function ascii_to_hexa(str) {
  return str.split('').map(c => c.charCodeAt(0).toString(16)).join('');
}
console.log(ascii_to_hexa('12'));