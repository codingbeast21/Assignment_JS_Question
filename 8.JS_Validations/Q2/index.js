function isValidCreditCard(number) {
  return /^\d{13,19}$/.test(number.replace(/[\s-]/g, ''));
}
console.log(isValidCreditCard("4111 1111 1111 1111"));
