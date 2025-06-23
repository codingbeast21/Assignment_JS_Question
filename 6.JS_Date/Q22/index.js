function ISO_numeric_date(dt) {
  return dt.getDay() === 0 ? 7 : dt.getDay();
}

console.log(ISO_numeric_date(new Date(2015, 10, 1))); // 7
