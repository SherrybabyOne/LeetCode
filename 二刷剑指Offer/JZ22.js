/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
  const res = [];
  const queue = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    const node = queue.shift();
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
}