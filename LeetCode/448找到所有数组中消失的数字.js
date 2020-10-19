/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const newIndex = Math.abs(nums[i]) - 1;
    if (nums[newIndex] > 0) nums[newIndex] *= -1;
  }
  const res = [];
  for (let i = 1; i < len + 1; i++) {
    if (nums[i - 1] > 0) res.push(i);
  }
  return res;
};