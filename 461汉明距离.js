/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0
    const xory = x ^ y
    for (let i = 0; i < 32; i++) {
        const mask = 1 << i
        count += (xory & mask) > 0
    }
    return count
};