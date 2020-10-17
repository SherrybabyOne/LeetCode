/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(...nums);
  const len = nums.length;
  const dp = [nums[0]];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return Math.max(dp[len - 1], dp[len - 2]);
};