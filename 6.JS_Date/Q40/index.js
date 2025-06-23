function timezone_offset_in_seconds(dt) {
  return -dt.getTimezoneOffset() * 60;
}
console.log(timezone_offset_in_seconds(new Date()));