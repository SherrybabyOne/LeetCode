/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let sortArray = nums.sort()
    for (let i = 0; i < sortArray.length; i++) {
        if (nums[i] === nums[i+1]) return nums[i]
    }
};