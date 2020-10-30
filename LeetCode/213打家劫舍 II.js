/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length;
  if (!n) return 0;
  if (n === 1) return nums[0];

  return Math.max(myRob(nums.slice(0, n - 1)), myRob(nums.slice(1)));
};
function myRob(nums) {
  let prev = 0;
  let cur = 0;
  let temp;
  for (let i = 0; i < nums.length; i++) {
    temp = cur;
    cur = Math.max(prev + nums[i], cur);
    prev = temp;
  }
  return cur;
}