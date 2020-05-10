/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    //保存所有符合条件的IP地址
    let res = [];
    //递归
    if(s.length > 13) return [];
    let search = (cur,sub) => {
        if(cur.length === 4 && cur.join('') === s) {
            res.push(cur.join('.'))
        }else {
            for(let i = 0,len = Math.min(3,sub.length),tmp; i<len; i++) {
                tmp = sub.substring(0,i+1);
                if(tmp < 256 ) {
                    if(tmp.length >= 2 && tmp[0]==='0') continue
                    search(cur.concat(tmp),sub.substring(i+1))
                }
            }
        }
    }
    search([],s);
    return res;
};

console.log(restoreIpAddresses("25525511135"))