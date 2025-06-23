function month_end_date(dt) {
  return new Date(dt.getFullYear(), dt.getMonth() + 1, 0);
}
console.log(month_end_date(new Date()).toString());