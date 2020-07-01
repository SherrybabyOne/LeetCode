function FindNumsAppearOnce(array) {
  const hash = new Map();
  for (let i = 0; i < array.length; i++) {
    if (hash.has(array[i])) {
      hash.set(array[i], 2);
    } else {
      hash.set(array[i], 1);
    }
  }
  const res = [];
  hash.forEach((key, val) => {
    if (key === 1) {
      res.push(val);
    }
  });
  return res;
}