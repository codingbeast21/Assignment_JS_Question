function containsAlphaDashUnderscore(str) {
  return /^[a-zA-Z0-9_-]+$/.test(str);
}
console.log(containsAlphaDashUnderscore("user_name-123"));