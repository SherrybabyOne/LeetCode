/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 中序遍历
var isValidBST = function(root) {
  
};
// 递归DFS
var isValidBST = function(root, lowser = null, upper = null) {
  if (!root) return true;
  if (lowser !== null && lowser >= root.val) return false;
  if (upper !== null && upper <= root.val) return false;
  return isValidBST(root.left, lowser, root.val) && isValidBST(root.right, root.val, upper);
};