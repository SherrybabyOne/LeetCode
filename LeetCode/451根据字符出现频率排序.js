/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let res = [];
    for(let char of s) {
        const index = res.findIndex(item => item[0] === char);
        if(index > -1) {
            res[index].push(char)
        } else {
            res.push([char])
        }
    }
    const result = res.sort((a,b) => b.length - a.length);
    return result.reduce((acc,cur) => `${acc}${cur.join('')}`,'')
};

console.log(
    frequencySort('caab')
)