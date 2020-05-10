/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n = nums.length;
    let res = [];
    let s = [];
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (s.length && s[s.length - 1] <= nums[i % n]) {
            s.pop();
        }
        res[i % n] = !s.length ? -1 : s[s.length - 1];
        s.push(nums[i % n])
    }
    return res;
};