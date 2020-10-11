/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const len = nums.length;
  let p0 = 0;
  let p1 = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) {
      swap(nums, p1, i);
      p1++;
    } else if (nums[i] === 0) {
      swap(nums, i, p0);
      if (p0 < p1) swap(nums, i, p1);
      p0++;
      p1++;
    }
  }
};
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}