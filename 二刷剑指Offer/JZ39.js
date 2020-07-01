/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
  if (pRoot == null) return true;
  if (Math.abs(height(pRoot.left) - height(pRoot.right)) > 1) {
    return false;
  } else {
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
  }
}
function height(node) {
  if (!node) return 0;
  return Math.max(height(node.left), height(node.right)) + 1;
}