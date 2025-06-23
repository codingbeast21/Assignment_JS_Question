function ISO8601_week_no(dt) {
  const t = new Date(dt.valueOf());
  const dayNr = (dt.getDay() + 6) % 7;
  t.setDate(t.getDate() - dayNr + 3);
  const jan4 = new Date(t.getFullYear(), 0, 4);
  const diff = (t - jan4) / 86400000;
  return 1 + Math.floor(diff / 7);
}

console.log(ISO8601_week_no(new Date(2015, 10, 1))); // 44
