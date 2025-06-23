// temperatureConverter.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Temperature Converter");
console.log("Type 'C' to convert Fahrenheit to Celsius.");
console.log("Type 'F' to convert Celsius to Fahrenheit.\n");

rl.question("Enter your choice (C/F): ", function(choice) {
  choice = choice.trim().toUpperCase();

  if (choice === 'C') {
    rl.question("Enter temperature in Fahrenheit: ", function(fahrenheit) {
      let f = parseFloat(fahrenheit);
      let c = (f - 32) * 5 / 9;
      console.log(`${f}°F is ${c.toFixed(2)}°C`);
      rl.close();
    });
  } else if (choice === 'F') {
    rl.question("Enter temperature in Celsius: ", function(celsius) {
      let c = parseFloat(celsius);
      let f = (c * 9 / 5) + 32;
      console.log(`${c}°C is ${f.toFixed(2)}°F`);
      rl.close();
    });
  } else {
    console.log("Invalid choice. Please enter 'C' or 'F'.");
    rl.close();
  }
});
