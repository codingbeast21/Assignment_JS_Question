function yesterday(dateStr) {
  const date = new Date(dateStr);
  date.setDate(date.getDate() - 1);
  return date.toString();
}

console.log(yesterday('Nov 15, 2014')); 
console.log(yesterday('Nov 16, 2015')); 
