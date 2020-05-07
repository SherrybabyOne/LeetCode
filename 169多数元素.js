/**
 * @param {number[]} nums
 * @return {number}
 */
// 哈希表写法
// 时间复杂度：O(n)
// 空间复杂度：O(n)
var majorityElement = function(nums) {
  const map = new Map();
  const min = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 0);
    }
    map.set(nums[i], map.get(nums[i]) + 1);
  }
  for (let [key, value] of map.entries()) {
    if (value > min) return key;
  }
  return false;
};

// 分治写法
// 时间复杂度：O(nlogn)
// 空间复杂度：O(logn)
var majorityElement = function(nums) {
  return majorityElementRec(nums, 0, nums.length - 1);
};
var majorityElementRec = function(nums, lo, hi) {
  if (lo === hi) return nums[lo];
  const mid = Math.floor((hi + lo) / 2);
  const left = majorityElementRec(nums, lo, mid);
  const right = majorityElementRec(nums, mid + 1, hi);
  if (left === right) return left;
  const leftCount = countInRange(nums, left, lo, hi);
  const rightCount = countInRange(nums, right, lo, hi);
  return leftCount > rightCount ? left : right;
}
var countInRange = function(nums, num, lo, hi) {
  let count = 0;
  for (let i = lo; i <= hi; i++) {
    if (nums[i] === num) count++;
  }
  return count;
}

// 巧妙的解题思路
// 时间复杂度：O(n)
// 空间复杂度：O(1)
var majorityElement = function(nums) {
  let curNum = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      curNum = nums[i];
      count = 1;
    } else {
      if (curNum === nums[i]) {
        count++;
      } else {
        count--;
      }
    }
  }
  return curNum;
};
