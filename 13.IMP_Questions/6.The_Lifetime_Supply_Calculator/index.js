function calculateSupply(age, amountPerDay) {
  const maxAge = 90;
  const yearsRemaining = maxAge - age;
  const totalAmount = Math.round(amountPerDay * 365 * yearsRemaining);
  console.log(
    `You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`
  );
}

calculateSupply(25, 2);
calculateSupply(40, 1.5);
calculateSupply(70, 3.7);


