/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target)>=0){
        return nums.indexOf(target)
    };
    for(let i = 0; i<nums.length; i++){
        if(target<nums[i])return i
    }
    return nums.length
};
console.log(searchInsert([1,3,5,6],8))


function lastLength(stringInput){
    const a = stringInput.split(' ');
    return a[a.length-1].length
}
console.log(lastLength('carpe diema'))