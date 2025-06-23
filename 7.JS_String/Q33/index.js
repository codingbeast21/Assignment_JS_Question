function remove_non_word(str) {
  return str.replace(/[^\w\s-]/g, '');
}
console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));