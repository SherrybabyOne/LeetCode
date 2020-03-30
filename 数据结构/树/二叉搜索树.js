class Node {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.size === 0;
    }
    addNode(val) {
        this.root = this._addChild(this.root, val);
    }
    _addChild(node, val) {
        if(!node) {
            this.size++;
            return new Node(val);
        }
        if(node.val > val) {
            node.left = this._addChild(node.left, val);
        }else if(node.val < val) {
            node.right = this._addChild(node.right, val);
        }
        return node
    }
}

// 搜索最小值
BST.prototype.getMin = function () {
    if (!this.root) return null;
    return this.getMinNode(this.root).val;
}
BST.prototype.getMinNode = function (node) {
    if (!node.left) return node;
    return this.getMinNode(node.left);
}

// 搜索最大值
BST.prototype.getMax = function () {
    if (!this.root) return null;
    return this.getMaxNode(this.root).val;
}
BST.prototype.getMaxNode = function (node) {
    if (!node.right) return node;
    return this.getMaxNode(node.right);
}

// 搜索某个特定的值
BST.prototype.search = function (val) {
    if (!this.root) return false;
    return this.searchNode(this.root, val);
}
BST.prototype.searchNode = function (node, val) {
    if (!node) return false;
    if (val < node.val) return this.searchNode(node.left, val);
    if (val > node.val) return this.searchNode(node.right, val);
    return true;
}

// 二叉搜索树中最难实现的部分：删除节点
// 有三种情况：
// 1. 需要删除的节点没有子树
// 2. 需要删除的节点只有一条子树
// 3. 需要删除的节点有左右两条子树
BST.prototype.remove = function (val) {
    if (!this.root) return null;
    this.root = this.removeNode(this.root, val);
}
BST.prototype.removeNode = function (node, val) {
    if (!node) return null;
    if (val < node.val) {
        node.left = this.removeNode(node.left, val);
        return node;
    } else if (val > node.val) {
        node.right = this.removeNode(node.right, val);
        return node;
    } else {
        // 键相同的情况
        // 第一种情况：移除一个叶节点
        if (node.left == null && node.right == null) {
            this.size--;
            node = null;
            return node;
        }
        // 第二种情况：移除有一个左侧或右侧子节点的节点
        if (node.left == null) {
            this.size--;
            node = node.right;
            return node;
        } else if (node.right == null) {
            this.size--;
            node = node.left;
            return node;
        }
        // 第三种情况：移除有两个子节点的节点
        const aux = this.getMinNode(node.right);
        node.val = aux.val;
        node.right = this.removeNode(node.right, aux.val);
        return node;
    }
}

const tree = new BST();
tree.addNode(3);
tree.addNode(1);
tree.addNode(4);
tree.addNode(5);
tree.addNode(7);
tree.addNode(6);
tree.addNode(8);
tree.addNode(2);
tree.addNode(-1);
console.log(
    tree.remove(1),
    tree.getSize(),
)
