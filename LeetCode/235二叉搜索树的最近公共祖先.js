/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 递归写法 
var lowestCommonAncestor = function(root, p, q) {
  if (root == null || root == p || root == q) return root;
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
  return root;
};
// 非递归写法
var lowestCommonAncestor = function(root, p, q) {
  while (root) {
    if (root.val > p.val && root.val > q.val) root = root.left;
    else if (root.val < p.val && root.val < q.val) root = root.right;
    else return root;
  }
};