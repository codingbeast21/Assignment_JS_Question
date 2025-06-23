function is_weekend(dateStr) {
  const day = new Date(dateStr).getDay();
  return (day === 6 || day === 0) ? "weekend" : undefined;
}

console.log(is_weekend('Nov 15, 2014')); 
console.log(is_weekend('Nov 16, 2014')); 
console.log(is_weekend('Nov 17, 2014')); 
