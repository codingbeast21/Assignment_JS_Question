function numeric_month(dt) {
  return ("0" + (dt.getMonth() + 1)).slice(-2);
}
console.log(numeric_month(new Date(2015, 10, 1))); // "11"