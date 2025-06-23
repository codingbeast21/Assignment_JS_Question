function diff_hours(dt1, dt2) {
  return Math.floor((dt2 - dt1) / 3600000);
}
console.log(diff_hours(new Date("October 13, 2014 08:11:00"), new Date("October 13, 2014 11:13:00")));