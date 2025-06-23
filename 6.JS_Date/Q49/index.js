function diff_years(dt1, dt2) {
  return dt2.getFullYear() - dt1.getFullYear();
}
console.log(diff_years(new Date("June 13, 2014"), new Date("October 19, 2017")));