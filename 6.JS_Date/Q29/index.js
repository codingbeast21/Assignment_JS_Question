function sort_year(dt) {
  return dt.getFullYear().toString().slice(-2);
}
console.log(sort_year(new Date(1989, 10, 1)));