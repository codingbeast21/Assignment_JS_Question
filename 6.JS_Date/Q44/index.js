function diff_minutes(dt1, dt2) {
  return Math.round((dt2 - dt1) / 60000);
}
console.log(diff_minutes(new Date("October 13, 2014 11:11:00"), new Date("October 13, 2014 11:13:00")));