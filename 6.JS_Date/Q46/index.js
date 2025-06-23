function diff_days(dt1, dt2) {
  return Math.floor((dt2 - dt1) / (1000 * 60 * 60 * 24));
}
console.log(diff_days(new Date("October 13, 2014 08:11:00"), new Date("October 19, 2014 11:13:00")));