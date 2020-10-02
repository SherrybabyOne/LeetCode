/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const len = s.length;
  const dp = new Array(len).fill(0);
  let max = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
        max = Math.max(dp[i], max);
      } else if (s[i - 1] === ')' && s[i - 1 -  dp[i - 1]] === '(') {
        dp[i] = dp[i - 1] + (i - 2 - dp[i - 1] >= 0 ? dp[i - 2 - dp[i - 1]] : 0) + 2;
        max = Math.max(dp[i], max);
      }
    }
  }
  return max;
};

function longestValidParentheses(s) {
  let max = 0;
  const stack = [-1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }
  return max;
}