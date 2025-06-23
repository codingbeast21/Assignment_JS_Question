const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate random number between 1 and 10
const randomNum = Math.floor(Math.random() * 10) + 1;

// Ask the user to guess the number
rl.question("Guess a number between 1 and 10: ", (answer) => {
  const userGuess = parseInt(answer, 10);

  console.log(`Random number is: ${randomNum}`);

  if (userGuess === randomNum) {
    console.log("🎉 Congratulations! You guessed the correct number.");
  } else {
    console.log("❌ Sorry, that's incorrect. The correct number was: " + randomNum);
  }

  rl.close();
});
