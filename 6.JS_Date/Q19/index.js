function day_of_the_month(d) {
  return ("0" + d.getDate()).slice(-2);
}

console.log(day_of_the_month(new Date(2015, 10, 1))); // "01"
