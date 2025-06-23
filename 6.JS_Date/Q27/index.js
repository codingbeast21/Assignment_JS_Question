function short_months(dt) {
  return dt.toLocaleString('en-us', { month: 'short' });
}
console.log(short_months(new Date(2015, 10, 1)));