/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let map = (arr, r = []) => {
        let len = arr.length;
        if(len === 0) return [];
        let n = arr[0].length;
        if(n === 0) return r
        if(n === 1) return r.concat(arr.map(item => item[0]))
        for(let i = 0; i<len; i++) {
            if(i === 0) {
                r = r.concat(arr[i]);
            } else if (i === len-1) {
                r = r.concat(arr[i].reverse());
            } else {
                r.push(arr[i].pop())
            }
        }
        arr.shift();
        arr.pop();
        for(let i = arr.length - 1;i >= 0; i--) {
            r.push(arr[i].shift())
        }
        if (arr.length) {
            return map(arr,r)
        } else {
            return r
        }
    }
    return map(matrix,[]);
};