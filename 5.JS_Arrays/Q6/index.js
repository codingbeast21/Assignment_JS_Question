function insertDashes(num) {
  const str = num.toString();
  let result = [str[0]];

  for (let i = 1; i < str.length; i++) {
    const prev = parseInt(str[i - 1]);
    const curr = parseInt(str[i]);

    if (prev % 2 === 0 && curr % 2 === 0) {
      result.push('-', str[i]);
    } else {
      result.push(str[i]);
    }
  }

  return result.join('');
}

// Test
console.log(insertDashes("025468"));  // Output: "0-254-6-8"
