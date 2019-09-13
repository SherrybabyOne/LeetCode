/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let res = []
    res[0] = 0
    for (let i = 1; i <= num; i++) {
        res[i] = res[i & (i - 1)] + 1
    }
    return res
};