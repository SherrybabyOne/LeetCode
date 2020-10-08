/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) return 0;
  const rows = grid.length;
  const columns = grid[0].length;
  const dp = new Array(rows);
  for (let i = 0; i < rows; i++) dp[i] = new Array(columns).fill(0);
  dp[0][0] = grid[0][0];
  for (let i = 1; i < columns; i++) dp[0][i] = dp[0][i - 1] + grid[0][i];
  for (let i = 1; i < rows; i++) dp[i][0] = dp[i - 1][0] + grid[i][0];
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[rows - 1][columns - 1];
};