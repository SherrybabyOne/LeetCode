/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  const f = new Map();
  const g = new Map();
  dfs(root, f, g);
  return Math.max(f.get(root), g.get(root));
};
const dfs = (node, f, g) => {
  if (!node) {
    f.set(node, 0);
    g.set(node, 0);
    return;
  }
  dfs(node.left, f, g);
  dfs(node.right, f, g);
  f.set(node, node.val + g.get(node.left) + g.get(node.right));
  g.set(
    node,
    Math.max(f.get(node.left), g.get(node.left)) +
      Math.max(f.get(node.right), g.get(node.right))
  );
}