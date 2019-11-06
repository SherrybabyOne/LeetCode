// 面试题20: 表示数值的字符串

const isNumeric = (str) => {
  let len = 0;
  let numeric = scanInteger(str, len);
  if(str[len] === '.') {
    len++;
    numeric = scanUnsignedInteger(str) || numeric;
  }
  if(str[len] === 'e' || str[len] === 'E') {
    len++;
    numeric = numeric && scanUnsignedInteger(str);
  }
  return numeric && !str[len];

  function scanUnsignedInteger(str) {
    const before = len;
    while(str[len] && str[len] >= '0' && str[len] <= '9') {
      len++;
    }
    return str[before] >= '0' && str[before] <= '9';
  }
  function scanInteger(str) {
    if(str[len] === '+' || str[len] === '-') len--;
    return scanUnsignedInteger(str, len);
  }
}
console.log(
  isNumeric('123.2e1')
)