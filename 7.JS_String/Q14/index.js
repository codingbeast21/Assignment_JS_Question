function insert(main, ins, pos = 0) {
  return main.slice(0, pos) + ins + main.slice(pos);
}
console.log(insert('We are doing some exercises.')); 
console.log(insert('We are doing some exercises.','JavaScript '));