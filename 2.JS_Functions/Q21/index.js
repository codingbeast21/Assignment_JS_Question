function getCombinations(arr, k) {
  const result = [];

  function backtrack(start, combo) {
    if (combo.length === k) {
      result.push([...combo]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      backtrack(i + 1, combo);
      combo.pop();
    }
  }

  backtrack(0, []);
  return result;
}


const arr = [1, 2, 3];
const subsetLength = 2;
console.log(getCombinations(arr, subsetLength));
