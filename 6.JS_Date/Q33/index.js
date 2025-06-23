function hours_with_zeroes(dt) {
  let hour = dt.getHours() % 12 || 12;
  return ("0" + hour).slice(-2);
}
console.log(hours_with_zeroes(new Date(1989, 10, 1)));