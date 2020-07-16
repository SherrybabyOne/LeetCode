/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
  if (!pRoot) return true;
  return isSame(pRoot.left, pRoot.right);
}
const isSame = (left, right) => {
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val !== right.val) return false;
  return isSame(left.left, right.right) && isSame(left.right, right.left);
}