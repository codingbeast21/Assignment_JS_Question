function curday(separator) {
  let d = new Date();
  let day = ("0" + d.getDate()).slice(-2);
  let month = ("0" + (d.getMonth() + 1)).slice(-2);
  let year = d.getFullYear();
  return `${month}${separator}${day}${separator}${year}`;
}

console.log(curday('/')); 
console.log(curday('-')); 

