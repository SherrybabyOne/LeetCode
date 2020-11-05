/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const n = nums.length;
  const stack = [];
  let l = n - 1;
  let r = 0;
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
      l = Math.min(l, stack[stack.length - 1]);
      stack.pop();
    }
    stack.push(i);
  }
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      r = Math.max(r, stack[stack.length - 1]);
      stack.pop();
    }
    stack.push(i);
  }
  return r > l ? r - l + 1 : 0;
};