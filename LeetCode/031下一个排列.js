/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (!nums || nums.length === 1) return nums;
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) j--;
    swap(nums, i, j);
  }
  reverse(nums, i + 1);
  return nums;
};
function reverse(nums, start) {
  let i = start;
  let j = nums.length - 1;
  while(i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}
function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

console.log(
  nextPermutation([1,3,2])
)