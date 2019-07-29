/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return nums.sort((a,b)=>b-a)[k-1]
};



// var findKthLargest = function(nums, k) {
//     let leng = nums.length;
//     for(let i = leng-1; i>(leng-k-1); i--) {
//         for(let j = 0; j<i; j++) {
//             if(nums[j] > nums[j+1]) [nums[j],nums[j+1]] = [nums[j+1],nums[j]];
//         }
//     }
//     return nums[leng-k]
// };