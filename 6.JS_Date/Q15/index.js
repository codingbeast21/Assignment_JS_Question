function quarter_of_the_year(date) {
  return Math.floor(date.getMonth() / 3) + 1;
}

console.log(quarter_of_the_year(new Date(2015, 1, 21))); 
console.log(quarter_of_the_year(new Date(2015, 10, 18))); 
