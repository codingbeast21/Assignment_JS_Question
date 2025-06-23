var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findMostFrequent(arr) {
  let frequencyMap = {};
  let maxCount = 0;
  let mostFrequentItem = null;

  for (let item of arr) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;

    if (frequencyMap[item] > maxCount) {
      maxCount = frequencyMap[item];
      mostFrequentItem = item;
    }
  }

  console.log(`${mostFrequentItem} ( ${maxCount} times )`);
}

findMostFrequent(arr1);
