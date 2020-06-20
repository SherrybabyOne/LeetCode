/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree) {
  if (!pRootOfTree) return null;
  const res = [];
  sub(pRootOfTree, res);
  const len = res.length;

  res[0].left = null;
  res[0].right = res[1];
  for (let i = 1; i < len - 1; i++) {
    res[i].left = res[i - 1];
    res[i].right = res[i + 1];
  }
  res[len - 1].left = res[len - 2];
  res[len - 1].right = null;
  return res[0];
}
function sub(node, res) {
  if (!node) return;
  sub(node.left, res);
  res.push(node);
  sub(node.right, res);
}