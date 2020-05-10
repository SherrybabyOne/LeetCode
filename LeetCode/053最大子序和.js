/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let ans = nums[0];
  let sum = 0;
  for(let num of nums) {
      if(sum > 0) {
          sum = sum + num;
      } else {
          sum = num;
      }
      ans = Math.max(ans, sum);
  };
  return ans;
};