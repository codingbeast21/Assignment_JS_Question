function add_years(dt, years) {
  let result = new Date(dt);
  result.setFullYear(result.getFullYear() + years);
  return result;
}
console.log(add_years(new Date(2014, 10, 2), 10).toString());