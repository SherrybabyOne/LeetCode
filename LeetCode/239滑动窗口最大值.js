/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 方法一：暴力法
// var maxSlidingWindow = function(nums, k) {
//   const len = nums.length;
//   if (len * k === 0) return [];
//   const res = [];
//   let i = 0;
//   let j = k;
//   res.push(Math.max(...nums.slice(i, j)));
//   while (j < len) {
//     i++;
//     j++;
//     res.push(Math.max(...nums.slice(i, j)));
//   }
//   return res;
// };
// 方法二：双向队列
var maxSlidingWindow = function(nums, k) {
  const len = nums.length;
  if (len * k === 0) return [];
  if (len === 1) return nums;
  const deque = [];
  const res = [];

  // 双向队列的操作
  const deqAppend = i => {
    if (i - k === deque[0]) deque.shift();
    while (deque.length > 0 && nums[i] > nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) res.push(nums[deque[0]]);
  }

  for (let i = 0; i < nums.length; i++) {
    deqAppend(i);
  }

  return res;
};