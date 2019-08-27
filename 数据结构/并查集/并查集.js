// 并查集是一种特殊的树结构，用于处理一些不交集的合并及查询问题。
// 该结构中每个节点都有一个父节点，如果只有当前一个节点，那么该节点的父节点指向自己。

class DisjointSet {
    // 初始化样本
    constructor (count) {
        // 初始化时，每个节点都是自己
        this.parent = new Array(count);
        // 用于记录树的深度，优化搜索复杂度
        this.rank = new Array(count);
        for (let i = 0; i < count; i++) {
            this.parent[i] = i;
            this.rank[i] = i;
        }
    }
    find (p) {
        while (p !==  this.parent[p]) {
            this.parent[p] = this.parent[this.parent[p]];
            p = this.parent[p];
        }
        return p
    }
    isConnected (p,q) {
        return this.find(p) === this.find(q);
    }
    // 合并
    union (p,q) {
        
    }
}