/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let tmp = 0
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            tmp = (j - i) * Math.min(height[i], height[j])
            max = Math.max(tmp, max)
        }
    }
    return max
};


// 双指针法
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let tmp = 0
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            tmp = (j - i) * Math.min(height[i], height[j])
            max = Math.max(tmp, max)
        }
    }
    return max
};


// 双指针法
var maxArea = function(height) {
    let l = 0
    let r = height.length - 1
    let maxArea = 0
    while (l < r) {
        maxArea = Math.max(maxArea, (r- l) * Math.min(height[l], height[r]))
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return maxArea
};