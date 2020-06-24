function NumberOf1Between1AndN_Solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    const str = String(i);
    if (str.indexOf('1') !== -1) {
      for (let j = 0; j < str.length; j++) {
        if (str[j] === '1') count++;
      }
    }
  }
  return count;
}
