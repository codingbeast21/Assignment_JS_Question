function isDomain(str) {
  return /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str);
}
console.log(isDomain("example.com"));