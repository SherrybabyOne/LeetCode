/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];

  let ptr = 0;
  function getDigit() {
    let ret = '';
    while (s[ptr] >= '0' && s[ptr] <= '9') {
      ret += s[ptr++];
    }
    return ret;
  }
  while (ptr < s.length) {
    const cur = s[ptr];
    if (cur >= '0' && cur <= '9') {
      // 获取数字进栈
      stack.push(getDigit());
    } else if (
      (cur >= 'a' && cur <= 'z') ||
      (cur >= 'A' && cur <= 'Z') ||
      cur === '['
    ) {
      stack.push(cur);
      ptr++;
    } else {
      ptr++;
      let sub = '';
      while (stack[stack.length - 1] !== '[') {
        sub = stack.pop() + sub;
      }
      // 左括号出栈
      stack.pop();
      let repTime = parseInt(stack.pop());
      let t = '';
      while (repTime--) t += sub;
      stack.push(t);
    }
  }
  let res = '';
  while (stack.length > 0) res = stack.pop() + res;
  return res;
};