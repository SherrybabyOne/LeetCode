// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

// 假设一个二叉搜索树具有如下特征：

// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

class Node {
    constructor (val) {
        this.val = val;
        this.left = this.right = undefined;
    }
}
class Tree {
    constructor (data) {
        let root = new Node(data.shift());
        data.forEach(element => {
            this.insert(root,element)
        });
        return root
    }
    insert ( node , data ) {
        if(node.val > data) {
            if(node.left === undefined) node.left = new Node(data);
            else this.insert(node.left,data);
        } else {
            if(node.right === undefined) node.right = new Node(data);
            else this.insert(node.right,data);
        }
    }
}

let tree = new Tree([2,3,1,4])
console.log(tree)