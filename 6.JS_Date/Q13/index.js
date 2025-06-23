function timeConvert(min) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${min} minutes = ${h} hour(s) and ${m} minute(s).`;
}

console.log(timeConvert(200)); 
