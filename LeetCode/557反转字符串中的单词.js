/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.match(/[\w']+/g).map((item)=>{
        return item.split('').reverse().join('')
    }).join(' ')
};

module.exports = reverseWords;