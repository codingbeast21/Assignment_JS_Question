function diff_to_GMT(dt) {
  const offset = -dt.getTimezoneOffset() / 60;
  return (offset >= 0 ? "+" : "") + offset.toFixed(3);
}
console.log(diff_to_GMT(new Date()));