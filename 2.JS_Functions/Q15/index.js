const readline=require('readline');

const rl=readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

rl.question("enter the value of Base :", (base)=>{
  rl.question("enter the value of power:", (power)=>{
    console.log(base**power);
    rl.close();
  });
});