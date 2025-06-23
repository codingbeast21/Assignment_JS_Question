function abbrev_name(name) {
  let parts = name.split(" ");
  return parts[0] + " " + parts[1].charAt(0) + ".";
}
console.log(abbrev_name("Robin Singh"));