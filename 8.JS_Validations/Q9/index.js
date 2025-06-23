function isValidURL(url) {
  const pattern = /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/([\w/_.]*)?)?$/i;
  return pattern.test(url);
}
console.log(isValidURL("https://www.example.com"));