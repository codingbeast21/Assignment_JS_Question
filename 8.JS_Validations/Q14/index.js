function isCanadaPostCode(str) {
  return /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ ]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(str);
}
console.log(isCanadaPostCode("K1A 0B1")); 