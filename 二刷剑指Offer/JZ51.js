function multiply(array) {
  if (!array || array.length === 0 || array.length === 1) return array;
  const len = array.length;
  const res = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    res[i] = res[i - 1] * array[i - 1];
  }
  let temp = 1;
  for (let i = len - 2; i >= 0; i--) {
    temp *= array[i + 1];
    res[i] *= temp;
  }
  return res;
}
