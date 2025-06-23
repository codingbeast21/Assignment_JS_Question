function english_ordinal_suffix(dt) {
  const day = dt.getDate();
  if (day > 3 && day < 21) return day + "th";
  switch (day % 10) {
    case 1: return day + "st";
    case 2: return day + "nd";
    case 3: return day + "rd";
    default: return day + "th";
  }
}

console.log(english_ordinal_suffix(new Date(2015, 10, 1))); // "1st"
