/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        '(' : -1,
        ')' : 1,
        '{' : -2,
        '}' : 2,
        '[' : -3,
        ']' : 3
    };
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]] < 0) {
            stack.push(s[i])
        } else {
            let last = stack.pop();
            if(map[last] + map[s[i]] !== 0) return false;
        }
    }
    if(stack.length > 0) return false;
    return true;
};


// 优化版

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    let leftArr = [];
    for(var ch of s) {
        if(ch in map) {
            leftArr.push(ch)
        } else {
            if(ch != map[leftArr.pop()]) return false;
        }
    }
    return !leftArr.length
};
