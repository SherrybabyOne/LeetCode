/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0;
    let i =0;
    let tmp = [];
    while (i < s.length) {
        if(tmp.indexOf(s[i]) === -1) {
            tmp.push(s[i])
        } else {
            tmp.shift();
            continue
        }
        res = Math.max(res,tmp.length);
        i++
    }
    return res;
};