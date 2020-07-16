/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
  if (!pRoot) return [];
  const queue = [pRoot];
  const res = [];
  while (queue.length) {
    const ans = [];
    let size = queue.length;
    while (size--) {
      const node = queue.shift();
      ans.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(ans);
  }
  return res;
}