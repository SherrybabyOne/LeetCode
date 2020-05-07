// 二叉树的节点
class Node {
    constructor (val) {
        this.val = val;
        this.left = this.right = undefined;
    }
}

// 对称二叉树
class Tree {
    constructor (data) {
        let nodeList = [];
        let root;
        for(let i = 0; i < data.length; i++) {
            let node = new Node(data[i]);
            nodeList.push(node);
            if(i > 0) {
                // 计算当前节点属于哪一层
                let n = Math.floor(Math.sqrt(i+1));
                // 记录当前层的起始点
                let q = Math.pow(2,n) - 1;
                // 记录上一层的起始点
                let p = Math.pow(2,n-1) - 1;
                // 找到当前节点的父节点
                let parent = nodeList[p + Math.floor((i-q)/2)];
                if(parent.left) {
                    parent.right = node;
                } else {
                    parent.left = node;
                }
            }
        }
        root = nodeList.shift();
        nodeList.length = 0;
        return root
    }
}

let tree = new Tree([[1,2,2,3,4,4,3]]);
// 此时tree就是一个对称二叉树