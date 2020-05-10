/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], 1)
        else map.set(nums[i], map.get(nums[i]) + 1)
    }
    let longestStreak = 0;
    let keys = [...map.keys()];
    for (let i = 0; i < keys.length; i++) {
        if (!map.has(keys[i]) - 1) {
            let currentSteak = 1;
            let currentNum = keys[i];
            while (map.has(currentNum + 1)) {
                currentNum ++;
                currentSteak ++
            }
            longestStreak = Math.max(longestStreak, currentSteak)
        }
    }
    return longestStreak
};