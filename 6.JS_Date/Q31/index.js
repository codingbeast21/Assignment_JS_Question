function am_pm_upper(dt) {
  return dt.getHours() < 12 ? 'AM' : 'PM';
}
console.log(am_pm_upper(new Date()));