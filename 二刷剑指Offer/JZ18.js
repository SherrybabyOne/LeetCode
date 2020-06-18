/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root) {
  if (!root) return null;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  Mirror(root.left);
  Mirror(root.right);
  return root;
}