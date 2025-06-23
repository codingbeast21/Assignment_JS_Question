function hours_without_zeroes(dt) {
  return dt.getHours();
}
console.log(hours_without_zeroes(new Date(1989, 10, 1)));