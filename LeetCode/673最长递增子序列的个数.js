/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  let len = nums.length;
  if(len <= 1) return len;
  let length = new Array(len).fill(0), counts = new Array(len).fill(1);
  for (let j = 0; j < len; j++) {
      for (let i = 0; i < j; i++) {
          if(nums[i] < nums[j]){
              if(length[i] >= length[j]) {
                  length[j] = length[i] + 1;
                  counts[j] = counts[i];
              } else if(length[i] + 1 === length[j]) {
                  counts[j] += counts[i]
              }
          }
      }
  }
  let longest = 0, ans = 0;
  for (let i = 0; i < length.length; i++) {
      longest = Math.max(longest, length[i]);
  }
  for (let j = 0; j < len; j++) {
      if(length[j] === longest) {
          ans += counts[j]
      }
  }
  return ans;
};