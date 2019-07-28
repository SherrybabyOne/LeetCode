/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(p === '*') return true;
    if(p === '?') {
        if(s.length===1)return true
        return false
    }
    if(s === ''){
        if(p === '') return true
        return false
    }
    if(p === '') return false
    let modeArr = p.match(/([a-z?]\*)|([a-z]+(?=([a-z?]\*)|$))/g);
    let cur = 0;
    let strLen = s.length;
    for(let i = 0; i<modeArr.length; i++) {
        //对于模式，分为三类，?* a* abc
        m = modeArr[i].split('');
        //如果第二位是*表示是有模式的
        if(m[1] === '*') {
            if(m[0] === '?') {
                cur = strLen;
                break
            }else {
                while (m[0] === s[cur]) {
                    cur++
                }
            }
        }else {
            for(let j = 0; j<m.length; j++){
                if(m[i] !== s[cur]) return false
                cur++
            }
        }
        return cur === strLen;
    }
    return ''
};

console.log(isMatch('adceb','*a*b'))