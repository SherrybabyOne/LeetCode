/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums) return 0;
  const len = nums.length;
  if (len === 0) return 0;
  const dp = new Array(len).fill(1);
  let res = 1;
  for (let i = 1; i < len; i++) {
    let temp = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        temp = Math.max(temp, dp[j] + 1);
      }
    }
    dp[i] = temp;
    res = Math.max(res, temp);
  }
  return res;
};