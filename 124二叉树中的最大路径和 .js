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
var maxPathSum = function(root) {
  let max = root.val;
  function _maxPathSum(node) {
    if (!node) return 0;
    const L = Math.max(_maxPathSum(node.left), 0);
    const R = Math.max(_maxPathSum(node.right), 0);
    max = Math.max(L + R + node.val, max);
    return Math.max(L, R) + node.val;
  }
  _maxPathSum(root);
  return max;
};