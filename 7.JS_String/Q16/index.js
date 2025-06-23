function text_truncate(str, len = str.length, end = '...') {
  return str.length > len ? str.slice(0, len - end.length) + end : str;
}
console.log(text_truncate('We are doing JS string exercises.')); 
console.log(text_truncate('We are doing JS string exercises.',19));