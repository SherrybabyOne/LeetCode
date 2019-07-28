/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const originData = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z'],
    };
    let res = [], tmpRes = [];
    for(let i = 0; i<digits.length; i++) {
        if(res.length === 0) {
            res = originData[digits[0]];
        }else {
            let digitsArr = originData[digits[i]];
            res.forEach(item => {
                digitsArr.forEach( digitsItem => {
                    tmpRes.push(item + digitsItem)
                })
            })
            res = tmpRes;
            tmpRes = [];
        }
    }
    return res;
}