function FirstNotRepeatingChar(str) {
  const hash = new Map();
  for (let i = 0; i < str.length; i++) {
    const hashItem = hash.get(str[i]);
    if (hashItem !== false && hashItem === undefined) {
      hash.set(str[i], i);
    } else {
      hash.set(str[i], false);
    }
  }
  for (const index of hash.values()) {
    if (index !== false) return index;
  }
  return -1;
}
console.log(FirstNotRepeatingChar('googgle'))