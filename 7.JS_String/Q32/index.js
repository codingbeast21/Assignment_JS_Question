function remove_non_ascii(str) {
  return str.replace(/[^\x20-\x7E]/g, '');
}
console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));