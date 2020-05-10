/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = [-1, -1]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            res[0] = i
            break
        }
    }
    if (res[0] === -1) {
        return res
    }
    for (let j = nums.length -1; j >= 0; j--) {
        if (nums[j] === target) {
            res[1] = j
            break
        }
    }
    return res
};