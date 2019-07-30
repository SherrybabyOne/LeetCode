/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let n = 0, pre = 0, curr = 0;
    for(let i = 0; i<s.length; i++) {
        if(s[i] === s[i+1]) {
            curr++
        }else {
            pre = curr;
            curr = 1;
        }
        if(pre >= curr) n++
    }
    return n
}