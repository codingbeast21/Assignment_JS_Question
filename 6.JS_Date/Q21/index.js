function long_Days(dt) {
  return dt.toLocaleString('en-us', { weekday: 'long' });
}

console.log(long_Days(new Date(2015, 10, 1)));
