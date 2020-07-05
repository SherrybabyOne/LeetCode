function StrToInt(str) {
  if (!str) return 0;
  let fu = 0;
  if (str[0] === '-') fu = 1;
  let sum = 0;
  for (let i = fu; i < str.length; i++) {
    if (str[i] === '+') continue;
    if (str[i] < '0' || str[i] > '9') return 0;
    sum = sum * 10 + (str[i] - 0)
  }
  return fu ? -sum : sum;
}
