/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (!nums.length) return false
    let map = new Map()
    let res = false
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], 1)
        else map.set(nums[i], map.has(nums[i]) + 1)
    }
    map.forEach((value, key) => {
        console.log(key)
        console.log(value)
        if (value >= 2) res = true;
    })
    return res
};


var containsDuplicate = function(nums) {
    if (!nums.length) return false
    const res = [...new Set(nums)];
    return !(res.length === nums.length)
};