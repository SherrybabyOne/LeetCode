/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  const n = nums.length;
  const val = new Array(n + 2);
  val[0] = val[n + 1] = 1;
  for (let i = 1; i <= n; i++) {
    val[i] = nums[i - 1];
  }
  const rec = new Array(n + 2);
  for (let i = 0; i < n + 2; i++) rec[i] = new Array(n + 2).fill(-1);

  function solve(left, right) {
    if (left >= right - 1) return 0;
    if (rec[left][right] != -1) {
      return rec[left][right];
    }
    for (let i = left + 1; i < right; i++) {
      let sum = val[left] * val[i] * val[right];
      sum += solve(left, i) + solve(i, right);
      rec[left][right] = Math.max(rec[left][right], sum);
    }
    return rec[left][right];
  }

  return solve(0, n + 1);
};