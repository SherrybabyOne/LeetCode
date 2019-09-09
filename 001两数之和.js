//一遍哈希表
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = {};
    for(let i = 0; i<nums.length; i++){
        if(res[target-nums[i]] != undefined){
            return [i,res[target-nums[i]]]
        }
        res[nums[i]] = i;
    }
};


var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [i, map.get(nums[i])]
        } else {
            map.set(target - nums[i], i)
        }
    }
    return []
};