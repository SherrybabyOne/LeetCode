/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    let len = nums.length;
    nums.sort((a,b) => a - b);
    if(nums[0] <= 0 && nums[len-1] >= 0) {
        for(let i = 0; i < len - 2;) {
            if(nums[i] > 0) break;
            let first = i + 1;
            let last = len - 1;
            do {
                if(first > last || nums[i] * nums[last] > 0) break;
                let result = nums[i] + nums[first] + nums[last];
                if (result === 0) {
                    res.push([nums[i],nums[first],nums[last]]);
                }
                if (result <= 0) {
                    while (first<last && nums[first]===nums[++first]) {}
                } else {
                    while (first<last && nums[last]===nums[--last]) {}
                }
            } while(first < last)
            while (nums[i] === nums[++i]) {}
        }
    }
    return res;
};