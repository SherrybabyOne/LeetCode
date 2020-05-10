/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let res = n ^ (n >> 1)
    return (res & res + 1) === 0
};