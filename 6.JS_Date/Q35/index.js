function minutes_with_leading_zeros(dt) {
  return ("0" + dt.getMinutes()).slice(-2);
}
console.log(minutes_with_leading_zeros(new Date(1989, 10, 1)));