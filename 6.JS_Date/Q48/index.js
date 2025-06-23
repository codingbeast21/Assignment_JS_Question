function diff_months(dt1, dt2) {
  return (dt2.getFullYear() - dt1.getFullYear()) * 12 + (dt2.getMonth() - dt1.getMonth());
}
console.log(diff_months(new Date("June 13, 2014"), new Date("October 19, 2014")));