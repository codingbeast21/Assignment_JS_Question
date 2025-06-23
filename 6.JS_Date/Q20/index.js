function short_Days(dt) {
  return dt.toLocaleString('en-us', { weekday: 'short' });
}

console.log(short_Days(new Date(2015, 10, 1)));
