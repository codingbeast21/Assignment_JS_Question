function random_item(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(random_item([10, 20, 30, 40, 50]));
