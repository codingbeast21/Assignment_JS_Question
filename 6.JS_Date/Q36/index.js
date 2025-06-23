function seconds_with_leading_zeros(dt) {
  return ("0" + dt.getSeconds()).slice(-2);
}
console.log(seconds_with_leading_zeros(new Date(1989, 10, 1))); 