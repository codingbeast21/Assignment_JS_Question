function humanize_format(num) {
  if (num == null) return;
  const suffix = ['th', 'st', 'nd', 'rd'],
        v = num % 100;
  return num + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
}
console.log(humanize_format(1)); 
console.log(humanize_format(8));