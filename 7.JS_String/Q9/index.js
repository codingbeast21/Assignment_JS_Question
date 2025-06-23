function capitalize_Words(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalize_Words('js string exercises'));