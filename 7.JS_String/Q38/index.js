function case_insensitive_search(source, search) {
  return source.toLowerCase().includes(search.toLowerCase()) ? "Matched" : "Not Matched";
}
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));