/**
 * @param {number[][]} matrix
 * @return {number}
 */
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
var longestIncreasingPath = function(matrix) {
  if (!matrix || matrix.length === 0) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m);
  for (let i = 0; i < m; i++) dp[i] = new Array(n);
  let res = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res = Math.max(res, dfs(matrix, i, j, m, n, dp));
    }
  }
  return res;
};
const dfs = (matrix, i, j, m, n, dp) => {
  if (dp[i][j]) return dp[i][j];
  let max = 1;

  for (let k = 0; k < 4; k++) {
    const x = i + dx[k];
    const y = j + dy[k];
    if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] > matrix[i][j]) {
      max = Math.max(max, 1 + dfs(matrix, x, y, m, n, dp));
    }
  }

  return dp[i][j] = max;
}
