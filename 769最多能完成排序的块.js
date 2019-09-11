/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    if ( arr === null) return 0
    let res = 0
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i])
        if (max === i) res++
    }
    return res
};