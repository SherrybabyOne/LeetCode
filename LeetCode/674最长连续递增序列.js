/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (!nums || !nums.length) return 0;
  const dp = [1];
  let res = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) dp[i] = 1;
    else {
      dp[i] = dp[i - 1] + 1;
      res = Math.max(res, dp[i]);
    }
  }
  return res;
};