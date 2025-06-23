function isTimeString(str) {
  return /^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(str);
}
console.log(isTimeString("23:59"));