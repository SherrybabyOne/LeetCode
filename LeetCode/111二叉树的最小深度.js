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
// 递归版本
var minDepth = function(root) {
	if (!root) return 0;
	const left = minDepth(root.left);
	const right = minDepth(root.right);
	if (left === 0 || right === 0) return left + right + 1;
	return Math.min(left, right) + 1;
};
// 非递归版本
var minDepth = function(root) {
	if (!root) return 0;
	const queue = [root];
	let ans = 1;
	while (queue.length) {
		const len = queue.length;
		for (let i = 0; i < len; i++) {
			const item = queue.shift();
			if (!item.left && !item.right) return ans;
			item.left && queue.push(item.left);
			item.right && queue.push(item.right);
		}
		ans++;
	}
	return ans;
};