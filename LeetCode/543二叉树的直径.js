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
var diameterOfBinaryTree = function(root) {
	let max = 0;
	function depth(node) {
		if (!node) return 0;
		const L = depth(node.left);
		const R = depth(node.right);
		max = Math.max(L + R, max);
		return Math.max(L, R) + 1;
	}
	depth(root);
	return max;
};