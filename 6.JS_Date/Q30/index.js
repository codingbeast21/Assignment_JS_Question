function am_pm_lower(dt) {
  return dt.getHours() < 12 ? 'am' : 'pm';
}
console.log(am_pm_lower(new Date()));