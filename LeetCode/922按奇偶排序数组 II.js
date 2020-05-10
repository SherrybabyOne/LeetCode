/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let odd = 1,
        even = 0,
        res = [];
    A.forEach( item => {
        if(item%2 === 1) {
            res[odd] = item;
            odd += 2
        }else {
            res[even] = item;
            even += 2
        }
    })
    return res;
};

console.log(sortArrayByParityII([4,2,5,7]))