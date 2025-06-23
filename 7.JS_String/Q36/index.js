function zeroFill(num, width, sign) {
  const absNum = Math.abs(num).toString().padStart(width, '0');
  const prefix = sign === '-' ? '+' : '';
  return prefix + absNum;
}
console.log(zeroFill(120, 5, '-'));
