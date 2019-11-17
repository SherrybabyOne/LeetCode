// 面试题36: 二叉搜索书与双向链表

const binaryTree = (root) => {
  if(!root) return null;
  const nodeList = [];
  inorderTraversal(root, nodeList);
  prev = new Node(nodeList[i]);
  const head = prev;
  let next = null;
  for(let i = 0; i < nodeList.length; i++) {
    if(i === 0) continue;
    next = new Node(nodeList[i])
    prev.next = next;
    next.prev = prev;
    prev = next;
  }
  return head;
}
var inorderTraversal = (root, arr) => {
  if(root) {
    inorderTraversal(root.left, arr);
    arr.push(root.val);
    inorderTraversal(root.right, arr);
  }
}
function Node(val) {
  this.val = val;
  this.prev = this.next = null;
}