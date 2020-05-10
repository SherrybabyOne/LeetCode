/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let curr = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            curr ++
            max = Math.max(max, curr)
        } else {
            max = Math.max(max, curr)
            curr = 0
        }
    }
    return max
};