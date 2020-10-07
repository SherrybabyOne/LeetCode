/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let rightMost = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (i <= rightMost) {
      rightMost = Math.max(rightMost, i + nums[i]);
    }
    if (rightMost >= len - 1) return true;
  }
  return false;
};