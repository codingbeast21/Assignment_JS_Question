function isHTML(str) {
  return /<\/?[a-z][\s\S]*>/i.test(str);
}
console.log(isHTML("<div>Hello</div>"));