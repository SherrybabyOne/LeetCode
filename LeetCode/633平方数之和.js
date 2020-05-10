/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let i = 0;
    let j = Math.floor(Math.sqrt(c));
    while (i <= j) {
        const powSum = i * i + j * j;
        if(powSum === c) return true;
        else if (powSum < c) i++;
        else if (powSum > c) j--;
    }
    return false
};