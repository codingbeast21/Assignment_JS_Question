function hex_to_ascii(hex) {
  let str = '';
  for (let i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}
console.log(hex_to_ascii('3132'));