function uncamelize(str, sep = ' ') {
  return str.replace(/([a-z])([A-Z])/g, `$1${sep}$2`).toLowerCase();
}
console.log(uncamelize('helloWorld')); 
console.log(uncamelize('helloWorld','-')); 
console.log(uncamelize('helloWorld','_')); 