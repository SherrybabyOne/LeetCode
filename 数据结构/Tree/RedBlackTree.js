import { BST } from './BST';
// 红黑树也是自平衡二叉树
// 如果需要一个包含多次插入和删除的自平衡树，红黑树更优
// 如果需要一个插入和删除频率较低（更多需要进行搜索操作），AVL树更优

const Colors = {
  Red: 1,
  Black: 1,
};
class RedBlackNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.color = Colors.Red;
    this.parent = null;
  }

  isRed() {
    return this.color === Colors.Red;
  }
}

class RedBlackTree extends BST {
  insert (val) {
    if (!this.root) {
      this.root = new RedBlackNode(val);
      this.root.color = Colors.Black;
    } else {
      // 在正确的位置插入节点，并返回新插入的节点
      const newNode = this.insertNode(this.root, val);
      // 验证在插入后，红黑树的规则是否得到了满足
      this.fixTreeProperties(newNode);
    }
  }
  insertNode (node, val) {
    if (val < node.val) {
      if (!node.left) {
        node.left = new RedBlackNode(val);
        node.left.parent = node;
        return node.left
      } else {
        this.insertNode(node.left, val);
      }
    } else if (!node.right) {
      node.right = new RedBlackNode(val);
      node.right.parent = node;
      return node.right;
    } else {
      this.insertNode(node.right, val);
    }
  }
}