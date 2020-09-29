/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const match = (i, j, s, p) => {
  if (i === 0) return false;
  if (p[j - 1] === '.') return true;
  return s[i - 1] === p[j - 1];
}
var isMatch = function(s, p) {
  const m = s.length;
  const n = p.length;
  const dp = new Array(m + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(false);
  }
  dp[0][0] = true;
  for (let i = 0; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (p[j - 1] === '*') {
        if (match(i, j - 1, s, p)) {
          dp[i][j] = dp[i - 1][j] || dp[i][j - 2];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      } else {
        if (match(i, j, s, p)) {
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
  }
  return dp[m][n];
};