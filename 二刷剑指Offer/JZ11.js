function NumberOf1(n) {
  let ans = 0;
  let flag = 1;
  while (flag) {
    if (n & flag) ans++;
    flag = flag << 1;
  }
  return ans;
}

NumberOf1(-3)
