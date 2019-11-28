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
        this.root = this._addChilc(this.root,val)
    }
    _addChild(node, val) {
        if(!node) return new Node(val)
        if(node.val > val) {
            node.left = this._addChild(node.left, val)
        }else if(node.val < val) {
            node.right = this._addChild(node.right, val)
        }
        return node
    }
}



// 二分搜索树查找最大值/最小值
class BST {
    // 获取最小值
    getMin () {
        return this._getMin(this.root).val;
    }
    _getMin (node) {
        if (!node.left) return node;
        return this._getMin(noode.left);
    }
    // 获取最大值
    getMax () {
        return this._getMax(this.root).val;
    }
    _getMax (node) {
        if (!node.right) return node;
        return this._getMax(node.right);
    }
}


// 向上取整和向下取整
class BST {
    floor (v) {
        let node = this._floor(this.root, v)
        return node ? node.val : null
    }
    _floor (node, v) {
        if (!node) return null
        if (node.val === v) return v
        if (node.val > v) return this._floor(node.left, v)
        // 判断当前节点是否拥有右子树
        let right = this._floor(node.right, v);
        if (right) return right
        return node
    }
}



// 二叉搜索树中最难实现的部分：删除节点
// 有三种情况：
// 1. 需要删除的节点没有子树
// 2. 需要删除的节点只有一条子树
// 3. 需要删除的节点有左右两条子树


// 删除最小节点：
class Bst {
    deleteMin () {
        this.root = this._deleteMin(this.root);
        console.log(this.root);
    }
    _deleteMin (node) {
        // 一直递归左子树
        // 如果左子树为空，就判断节点是否拥有右子树
        // 有右子树的话就把需要删除的节点替换为右子树
        if (!node.left && node !== null) {
            return node.right
        }
        node.left = this._deleteMin(node.left);
        return node
    }
}



// 删除任意节点
function delect(v) {
    this.root = this._delect(this.root, v)
  }
  function _delect(node, v) {
    if (!node) return null
    // 寻找的节点比当前节点小，去左子树找
    if (node.value < v) {
      node.right = this._delect(node.right, v)
    } else if (node.value > v) {
      // 寻找的节点比当前节点大，去右子树找
      node.left = this._delect(node.left, v)
    } else {
      // 进入这个条件说明已经找到节点
      // 先判断节点是否拥有拥有左右子树中的一个
      // 是的话，将子树返回出去，这里和 `_delectMin` 的操作一样
      if (!node.left) return node.right
      if (!node.right) return node.left
      // 进入这里，代表节点拥有左右子树
      // 先取出当前节点的后继结点，也就是取当前节点右子树的最小值
      let min = this._getMin(node.right)
      // 取出最小值后，删除最小值
      // 然后把删除节点后的子树赋值给最小值节点
      min.right = this._delectMin(node.right)
      // 左子树不动
      min.left = node.left
      node = min
    }
    // 维护 size
    node.size = this._getSize(node.left) + this._getSize(node.right) + 1
    return node
}