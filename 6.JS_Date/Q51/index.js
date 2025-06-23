function week_end_date(dt) {
  const end = new Date(dt);
  end.setDate(dt.getDate() + (6 - dt.getDay()));
  return end;
}
console.log(week_end_date(new Date()).toString());