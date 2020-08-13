/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (!nums.length) return 0;
  let index = 0, res = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) index = i;
    else res = Math.max(res, i - index + 1);
  }
  return res;
};