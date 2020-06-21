function Permutation(str) {
  if (str.length === 0) return [];
  if (str.length === 1) return [str];
  const res = [];
  const map = {};
  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    if (!map[s]) {
      const newStr = str.slice(0, i) + str.slice(i + 1, str.length);
      const rest = Permutation(newStr);
      for (let j = 0; j < rest.length; j++) {
        const t = s + rest[j];
        res.push(t);
      }
      map[s] = true;
    }
  }
  return res;
}