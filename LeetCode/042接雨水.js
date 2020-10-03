/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力法
var trap = function(height) {
  let ans = 0;
  const len = height.length;
  for (let i = 1; i < len - 1; i++) {
    let maxLeft = 0;
    let maxRight = 0;
    for (let j = i; j >= 0; j--) maxLeft = Math.max(maxLeft, height[j]);
    for (let j = i; j < len; j++) maxRight = Math.max(maxRight, height[j]);
    ans += Math.min(maxLeft, maxRight) - height[i];
  }
  return ans;
};
// 动态规划
var trap = function(height) {
  const len = height.length;
  let ans = 0;
  const maxLeft = new Array(len);
  const maxRight = new Array(len);
  maxLeft[0] = height[0];
  maxRight[len - 1] = height[len - 1];
  for (let i = 1; i < len; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
  }
  for (let i = len - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i]);
  }
  for (let i = 1; i < len - 1; i++) {
    ans += Math.min(maxLeft[i], maxRight[i]) - height[i];
  }
  return ans;
}
// 双指针
var trap = function(height) {
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = height.length - 1;
  let ans = 0;
  while (left <= right) {
    if (leftMax < rightMax) {
      ans += Math.max(0, leftMax - height[left]);
      leftMax = Math.max(leftMax, height[left]);
      left++;
    } else {
      ans += Math.max(0, rightMax - height[right]);
      rightMax = Math.max(rightMax, height[right]);
      right--;
    }
  }
  return ans;
}