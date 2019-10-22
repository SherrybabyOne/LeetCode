/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    arr = nums.filter(item=>item>0).sort((a,b)=>a-b);
    if(arr.length){
        if(arr[0] !== 1) {
            return 1
        }else {
            for(let i = 0; i<arr.length-1; i++) {
                if(arr[i+1]-arr[i] > 1) {
                    return arr[i] + 1
                }
            }
            return arr.pop()+1
        }
    }else {
        return 1;
    }
};