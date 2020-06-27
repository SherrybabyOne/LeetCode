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

function NumberOf1Between1AndN_Solution(n) {
  let res = 0, low = 0;
  let digit = 1;
  let high = Math.floor(n / 10);
  let cur = n % 10;
  while (high !== 0 || cur !== 0) {
    if (cur === 0) {
      res += high * digit;
    } else if (cur === 1) {
      res += high * digit + low + 1;
    } else {
      res += (high + 1) * digit;
    }
    low += digit * cur;
    cur = high % 10;
    high = Math.floor(high / 10);
    digit *= 10;
  }
  return res;
}