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
var isValidBST = function(root,lower = null,upper = null) {
	if (!root) return true;
	const val = root.val;
	if (lower !== null && lower >= val) return false;
	if (upper !== null && upper <= val) return false;
	return isValidBST(root.left, lower, val) && isValidBST(root.right, val, upper);
};
