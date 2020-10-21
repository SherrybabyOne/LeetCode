/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const len = nums.length;
  if (!len) return;
  const res = [1];
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  let R = 1;
  for (let i = len - 1; i >= 0; i--) {
    res[i] *= R;
    R *= nums[i];
  }
  return res;
};