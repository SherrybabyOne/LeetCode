/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    for(let i = 0, j = s.length - 1; i < j; i++ , j--) {
        if(s[i] !== s[j]) return isPalindrome(s,i,j-1) || isPalindrome(s,i+1,j)
    }
    return true;
    // 检查是否是回文数
    function isPalindrome (s,i,j) {
        while (i < j) {
            if(s[i++] !== s[j--]) return false;
        }
        return true;
    }
};