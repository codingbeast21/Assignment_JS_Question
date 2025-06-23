function diff_weeks(dt1, dt2) {
  return Math.floor(diff_days(dt1, dt2) / 7);
}
console.log(diff_weeks(new Date("June 13, 2014 08:11:00"), new Date("October 19, 2014 11:13:00")));