function add_months(dt, months) {
  let result = new Date(dt);
  result.setMonth(result.getMonth() + months);
  return result;
}
console.log(add_months(new Date(2014, 10, 2), 10).toString());