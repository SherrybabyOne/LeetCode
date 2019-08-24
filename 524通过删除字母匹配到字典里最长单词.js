/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    let longestWord = '';
    for(key in d) {
        let l1 = longestWord.length;
        let l2 = d[key].length;
        if(l1 > l2 || (l1 === l2 && longestWord < d[key])) {
            continue;
        }
        if(isSubstr(s,d[key])) {
            longestWord = d[key];
        }
    }
    return longestWord;

    function isSubstr (s,target) {
        let i = 0;
        let j = 0;
        while (i < s.length && j < target.length) {
            if(s[i] === target[j]) j++;
            i++
        }
        return j === target.length
    }
};

console.log(
    findLongestWord(
        "abpcplea",
        ["ale","apple","monkey","plea"]
    )
)