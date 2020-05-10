/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s === t) return true
    let mapS = new Map(),
        mapT = new Map()
    for (let i = 0; i < s.length; i++) {
        if (mapS.has(s[i]) || mapT.has(t[i])) {
            if (mapS.get(s[i]) !== mapT.get(t[i])) return false
        }
        mapS.set(s[i], i)
        mapT.set(t[i], i)
    }
    return true
};

var isIsomorphic = function(s, t) {
    if (s === t) return true
    for (let i = 0; i < s.length - 1; i++) {
        if (s.indexOf(s[i], i+1) !== t.indexOf(t[i], i+1)) return false
    }
    return true
};