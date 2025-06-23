function num_string_range(start, end, step) {
  let result = [];
  let isChar = isNaN(start);
  if (isChar) {
    let s = start.charCodeAt(0);
    let e = end.charCodeAt(0);
    for (let i = s; i <= e; i += step) {
      result.push(String.fromCharCode(i));
    }
  } else {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  }
  return result;
}
console.log(num_string_range('a', 'z', 2));
function num_string_range(start, end, step = 1) {
  const result = [];
  const isChar = isNaN(start) && isNaN(end);

  if (isChar) {
    let startCode = start.charCodeAt(0);
    let endCode = end.charCodeAt(0);

    if (startCode > endCode) {
      for (let i = startCode; i >= endCode; i -= step) {
        result.push(String.fromCharCode(i));
      }
    } else {
      for (let i = startCode; i <= endCode; i += step) {
        result.push(String.fromCharCode(i));
      }
    }
  } else {
    start = Number(start);
    end = Number(end);

    if (start > end) {
      for (let i = start; i >= end; i -= step) {
        result.push(i);
      }
    } else {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    }
  }

  return result;
}
