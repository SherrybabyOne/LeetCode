/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
  if (!pRoot) return [];
  const stack = [pRoot];
  let level = 0;
  const res = [];
  while (stack.length > 0) {
    const ans = [];
    let size = stack.length;
    while (size-- > 0) {
      const node = stack.shift();
      ans.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    if (level % 2 === 1) {
      ans.reverse();
    }
    res.push(ans);
    level++;
  }
  return res;
}