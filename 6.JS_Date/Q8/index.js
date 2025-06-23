function date_diff_indays(date1, date2) {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  return Math.floor((dt2 - dt1) / (1000 * 60 * 60 * 24));
}

console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014')); 

