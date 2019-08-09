/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let result = [],
        pre1,
        pre2;
    ops.forEach(item => {
        switch(item) {
            case 'C':
                if(result.length) result.pop();
                break
            case 'D':
                if(result.length) {
                    pre1 = result.pop();
                    result.push(pre1,pre1*2)
                }
                break
            case '+':
                pre1 = result.pop();
                pre2 = result.pop();
                result.push(pre2,pre1,pre1+pre2);
                break
            default:
                result.push(item * 1)
        }
    })
    return result.reduce( (total,num) => total+num)
};

console.log(calPoints(["5","2","C","D","+"]))