/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const obj = {}
    for (let i = 0; i < s.length; i++) {
        obj[s.charAt(i)] ? obj[s.charAt(i)] ++ : (obj[s.charAt(i)] = 1);
        obj[t.charAt(i)] ? obj[t.charAt(i)] -- : (obj[t.charAt(i)] = -1)
    }
    return Object.keys(obj).every(item => obj[item] === 0);
};