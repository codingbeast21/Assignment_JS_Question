function move(arr, from, to) {
  arr = [...arr]; 
  let element = arr.splice(from < 0 ? arr.length + from : from, 1)[0];
  arr.splice(to < 0 ? arr.length + to : to, 0, element);
  return arr;
}
console.log(move([10, 20, 30, 40, 50], 0, 2)); 
console.log(move([10, 20, 30, 40, 50], -1, -2));
