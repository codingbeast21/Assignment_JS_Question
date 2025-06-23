function calculate_age(birth) {
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

console.log(calculate_age(new Date(1982, 11, 4))); // ~ age
console.log(calculate_age(new Date(1962, 1, 1)));  // ~ age
