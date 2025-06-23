function reverseNumber(x){
   const reversed= parseInt(x.toString().split('').reverse().join(''));
   return reversed;
}

let x=32243;
console.log(reverseNumber(x));