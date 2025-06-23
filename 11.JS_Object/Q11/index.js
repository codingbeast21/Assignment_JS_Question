function all_properties(obj) {
  const props = [];
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      props.push(key);
    }
  }
  return props;
}

console.log(all_properties(Array));
