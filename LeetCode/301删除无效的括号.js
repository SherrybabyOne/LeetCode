/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  const res = [''];
  removeInvalidParenthesesHelper(s, 0, s.length, 0, '', res);
  return [...new Set(res)];
};
function removeInvalidParenthesesHelper(s, start, end, count, cur, res) {
  if (count < 0) return;
  if (start === end) {
    if (count === 0) {
      const max = res[0].length;
      if (cur.length > max) {
        res.length = 0;
        res.push(cur);
      } else if (cur.length === max) res.push(cur);
    }
    return;
  }
  // 添加当前字符
  if (s[start] === '(') {
    removeInvalidParenthesesHelper(s, start + 1, end, count + 1, cur + '(' , res);
  } else if (s[start] === ')') {
    removeInvalidParenthesesHelper(s, start + 1, end, count - 1, cur + ')', res);
  } else {
    removeInvalidParenthesesHelper(s, start + 1, end, count, cur + s[start], res);
  }
  // 不添加当前字符
  if (s[start] === '(' || s[start] === ')') {
    removeInvalidParenthesesHelper(s, start + 1, end, count, cur, res);
  }
}