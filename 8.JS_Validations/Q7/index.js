function isValidIP(ip) {
  return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip);
}
console.log(isValidIP("192.168.1.1")); 