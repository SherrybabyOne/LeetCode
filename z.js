// 输入：
//     s: 'abcabc'
//     r: 'abc'
// 输出：
//     [0,3]

let indexAll = function (s,r) {
    if(s.indexOf(r) !== -1) {
        let pos = s.indexOf(r);
        let res = [];
        while(pos !== -1) {
            res.push(pos);
            pos = s.indexOf(r,pos+r.length)
        }
        return res
    }else {
        return [];
    }
}

console.log(indexAll('abcabc','abc'))