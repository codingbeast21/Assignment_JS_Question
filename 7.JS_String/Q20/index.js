function formatted_string(mask, str, side = '') {
  str = str.toString();
  if (side === 'l') {
    return (mask + str).slice(-mask.length);
  }
  return (str + mask).slice(0, mask.length);
}
console.log(formatted_string('0000',123,'l')); 