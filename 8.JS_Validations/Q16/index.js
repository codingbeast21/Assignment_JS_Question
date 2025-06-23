function isHexValue(str) {
  return /^0x[0-9A-Fa-f]+$/.test(str);
}
console.log(isHexValue("0x1A3F")); 