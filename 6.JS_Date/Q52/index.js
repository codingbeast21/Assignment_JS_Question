function month_start_date(dt) {
  return new Date(dt.getFullYear(), dt.getMonth(), 1);
}
console.log(month_start_date(new Date()).toString());
