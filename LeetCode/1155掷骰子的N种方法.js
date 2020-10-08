/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
  if (d * f < target) return 0;
  const MOD = Math.pow(10, 9) + 7;
  const dp = new Array(d);
  const targetMin = Math.min(d * f, target);
  for (let i = 0; i < d; i++) dp[i] = new Array(targetMin).fill(0);
  for (let i = 0; i < f; i++) dp[0][i] = 1;
  for (let i = 1; i < d; i++) {
    for (let j = 1; j < targetMin; j++) {
      for (let k = 1; k <= f; k++) {
        j - k >= 0 ? dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % MOD : null;
      }
    }
  }
  return dp[d - 1][target - 1];
};