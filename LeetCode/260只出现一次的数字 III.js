/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    nums.sort()
    let res = []
    for (let i = 0; i < nums.length;) {
        if (nums[i] !== nums[i+1]) {
            res.push(nums[i])
            i++
        } else {
            i += 2
        }
    }
    return res
};

