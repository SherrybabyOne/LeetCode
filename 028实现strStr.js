/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    for(let i = 0; i < haystack.length; i++) {
        let j = 0;
        while (haystack[i+j] === needle[j]) {
            j++;
            if(j === needle.length) {
                console.log(i,j)
                return i
            }
        }
    }  
    return -1
};