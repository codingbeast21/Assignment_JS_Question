const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("Enter a year: ", function (input) {
   const year = parseInt(input);

  // 5. Check if the year is a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }

  // 6. Close the input interface
  rl.close();
});





