/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        if(nums[j] !== val) {
            nums[i] = nums[j];
            i++
        }
    }
    return i
};
