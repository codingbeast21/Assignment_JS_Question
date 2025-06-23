function add_weeks(dt, weeks) {
  let result = new Date(dt);
  result.setDate(result.getDate() + weeks * 7);
  return result;
}
console.log(add_weeks(new Date(2014, 10, 2), 10).toString());