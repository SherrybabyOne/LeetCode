class Node {
    constructor (value) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor () {
        this.root = null;
        this.size = 0;
    }
    getSize () {
        return this.size;
    }
    isEmpty () {
        return this.size === 0;
    }
    addNode (val) {
        this.root = this._addChilc(this.root,val)
    }
    _addChilc (node,val) {
        if (!node) {
            this.size++;
            return new Node(val)
        }
        if (node.val > val) {
            node.left = this._addChilc(node.left,val);
        } else if (node.val < val) {
            node.right = this._addChilc(node.right,val);
        }
        return node
    }
}