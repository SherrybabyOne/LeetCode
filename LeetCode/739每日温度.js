/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let res = [];
    let len = T.length;
    for (let i = 0; i < len - 1; i++) {
        for(let j = i +1; j < len; j++) {
            if (T[j] > T[i]) {
                res[i] = j - i;
                break;
            }
        }
        if (!res[i]) res[i] = 0;
    }
    res[len - 1] = 0;
    return res;
};