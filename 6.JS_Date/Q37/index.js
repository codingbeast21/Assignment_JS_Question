function get_timezone(dt) {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
console.log(get_timezone(new Date())); 