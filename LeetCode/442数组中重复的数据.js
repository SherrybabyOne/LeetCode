/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  if(!nums) return null;
  for(let i = 0; i < nums.length; i++) {
    while(nums[i] !== i) {
      if(nums[i] === nums[nums[i]]) return true;
      let temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }
  return false;
};