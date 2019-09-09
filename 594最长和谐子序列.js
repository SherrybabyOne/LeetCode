/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let max = 0;
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], 1)
        else map.set(nums[i], map.get(nums[i]) + 1)
    }
    let keys = [...map.keys()];
    for (let i = 0; i < keys.length; i++) {
        if (map.has(keys[i] + 1)) {
            max = Math.max(max, map.get(keys[i]) + map.get(keys[i] + 1))
        }
    }
    return max
};