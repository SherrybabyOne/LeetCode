/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const n = nums.length;
  const hash = {};
  let preSum = 0;
  let res = 0;
  hash[0] = 1;
  for (let i = 0; i < n; i++) {
    preSum += nums[i];
    if (hash[preSum - k] != undefined) {
      res += hash[preSum - k];
    }
    hash[preSum] ? hash[preSum]++ : hash[preSum] = 1;
  }
  return res;
};