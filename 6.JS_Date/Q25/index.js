function full_month(dt) {
  return dt.toLocaleString('en-us', { month: 'long' });
}

console.log(full_month(new Date(2015, 10, 1))); // "November"
