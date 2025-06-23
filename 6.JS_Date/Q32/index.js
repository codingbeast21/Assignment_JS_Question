function internet_time(dt) {
  const UTC = dt.getUTCHours() * 3600 + dt.getUTCMinutes() * 60 + dt.getUTCSeconds();
  return Math.floor(((UTC + 3600) % 86400) / 86.4);
}
console.log(internet_time(new Date(1989, 10, 1)));