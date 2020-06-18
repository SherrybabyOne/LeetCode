/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
  if (!pRoot1 || !pRoot2) return false;
  return dfs(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
}
function dfs(p1, p2) {
  if (!p2) return true;
  if (!p1) return false;
  return p1.val === p2.val && dfs(p1.left, p2.left) && dfs(p1.right, p2.right);
}