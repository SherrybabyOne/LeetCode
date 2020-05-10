/**
 * @param {number} n
 * @return {number}
 */
// 1. 暴力法，递归 O(2*n)
var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
// 2. 记忆化递归
var climbStairs = function(n) {
  const memo = new Array(n).fill(0);
  return _climbStairs(n, memo);
};
var _climbStairs = function(n, memo) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (memo[n] > 0) return memo[n];
  memo[n] = _climbStairs(n - 1, memo) + _climbStairs(n - 2, memo);
  return memo[n];
}
// 3. 动态规划
var climbStairs = function(n) {
  if (n === 1) return 1;
  const dp = [];
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};
// 4. 斐波那契数
var climbStairs = function(n) {
  if (n === 1) return 1;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }
  return second;
};
