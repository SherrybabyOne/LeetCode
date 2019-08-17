/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    // 输出结果(最大长度)
    let res = 0;
    // 字符串长度
    let len = s.length;
    for(let i = 0; i < len; i++) {
        let tmpMax = 0;
        for(let j = 0; j < len; j++) {
            if(s[j] === s[j+1]) break;
            tmpMax++
        }
        console.log(tmpMax)
        if(tmpMax > res) res = tmpMax
    }
    return res;
};

console.log(
    lengthOfLongestSubstring('abcabcbb')
)