function week_start_date(dt) {
  const start = new Date(dt);
  start.setDate(dt.getDate() - dt.getDay());
  return start;
}
console.log(week_start_date(new Date()).toString());