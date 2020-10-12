/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const len = nums.length;
  const res = [];
  for (let i = 0; i < 1 << len; i++) {
    const ans = [];
    for (let j = 0; j < len; j++) {
      if (i & (1 << j)) {
        ans.push(nums[j]);
      }
    }
    res.push(ans);
  }
  return res;
};