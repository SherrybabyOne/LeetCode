/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const len = nums.length;
  const dpMin = [nums[0]];
  const dpMax = [nums[0]];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dpMin[i] = Math.min(
      dpMin[i - 1] * nums[i],
      dpMax[i - 1] * nums[i],
      nums[i]
    );
    dpMax[i] = Math.max(
      dpMin[i - 1] * nums[i],
      dpMax[i - 1] * nums[i],
      nums[i]
    );
    if (dpMax[i] > max) max = dpMax[i];
  }
  return max;
};