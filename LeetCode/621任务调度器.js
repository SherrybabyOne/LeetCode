/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let q = '';
    let Q = {};
    tasks.forEach(item => {
        if(Q[item]) {
            Q[item]++;
        } else {
            Q[item] = 1;
        }
    })
    while (1) {
        // 任务清单
        let keys = Object.keys(Q);
        if(!keys[0]) {
            break
        }
        // 声明一个队列用来存储1+n任务单元
        let tmp = [];
        for (let i = 0; i <= n; i++) {
            let max = 0,
                key,
                pos;
            keys.forEach((item,index) => {
                if(Q[item] > max) {
                    max = Q[item];
                    key = item;
                    pos = index;
                }
            })
            if (key) {
                tmp.push(key);
                keys.splice(pos,1);
                Q[key]--
                if (Q[key] < 1) {
                    delete Q[key]
                }
            } else {
                break
            }
        }
        q += tmp.join('').padEnd(n + 1, '-')
    }
    // 边界的处理
    q = q.replace(/-+$/g,'')
    return q.length
};
console.log(
    leastInterval(["A","A","A","B","B","B"],2)
)