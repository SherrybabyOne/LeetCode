/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 方法一：暴力法
var maxSlidingWindow = function(nums, k) {
  const len = nums.length;
  if (len * k === 0) return [];
  const res = [];
  let i = 0;
  let j = k;
  res.push(Math.max(...nums.slice(i, j)));
  while (j < len) {
    i++;
    j++;
    res.push(Math.max(...nums.slice(i, j)));
  }
  return res;
};
// 方法二：双向队列
var maxSlidingWindow = function(nums, k) {
  
};
console.log(
  maxSlidingWindow(
    [1,3,-1,-3,5,3,6,7], 3
  )
)