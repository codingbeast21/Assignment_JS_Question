function sumOfSquaresOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

function isHappyNumber(num) {
  let seen = new Set();

  while (num !== 1 && !seen.has(num)) {
    seen.add(num);
    num = sumOfSquaresOfDigits(num);
  }

  return num === 1;
}

function firstNHappyNumbers(n) {
  const happyNumbers = [];
  let num = 1;

  while (happyNumbers.length < n) {
    if (isHappyNumber(num)) {
      happyNumbers.push(num);
    }
    num++;
  }

  console.log(`First ${n} happy numbers:`, happyNumbers);
}

firstNHappyNumbers(5);
