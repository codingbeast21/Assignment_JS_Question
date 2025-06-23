function isHexColor(str) {
  return /^#([0-9A-F]{3}){1,2}$/i.test(str);
}
console.log(isHexColor("#fff"));