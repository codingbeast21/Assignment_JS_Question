function findDate(str) {
  return str.match(/\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/g);
}
console.log(findDate("Event is on 12/05/2023 or maybe 13-06-2023"));