/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length < 2) {
        return 0
    }
    nums.sort((a,b)=>a-b);
    let max = 0;
    for(let i = 0; i<nums.length-1; i++) {
        if(max < nums[i+1]-nums[i]) max = nums[i+1]-nums[i];
    }
    return max
};


// var maximumGap = function(nums) {
//     let max = 0;
//     let leng = nums.length;
//     let space;
//     if(leng < 2) {
//         return 0
//     }
//     //冒泡排序
//     for(let i = leng-1; i>0; i--) {
//         for(let j = 0; j<i; j++) {
//             if(nums[j] > nums[j+1]) [nums[j],nums[j+1]] = [nums[j+1],nums[j]];
//         }
//         if(i < leng-1) {
//             space = nums[i+1] - nums[i];
//             if(space > max) max = space
//         }else if(leng === 2) max = nums[1] - nums[0]
//     }
//     console.log(nums)
//     return max
// };

console.log(maximumGap([1,10000]))