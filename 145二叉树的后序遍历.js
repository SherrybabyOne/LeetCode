/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 利用栈循环操作：
const postorderTraversal = function(root) {
	if (!root) return [];
	const stack = [];
	const res = [];
	let last = null;
	let current = root;
	while (stack.length > 0 || current) {
		while (current) {
			stack.push(current);
			current = current.left;
		}
		current = stack[stack.length - 1];
		if (!current.right || current.right == last) {
			current = stack.pop();
			res.push(current.val);
			last = current;
			// 防止左孩子继续进栈
			current = null;
		} else {
			current = current.right;
		}
	}
	return res;
};

//   反向操作，最后反转数组：
const postorderTraversal = function(root) {
	if (root === null) return [];
	let stack = [];
	let res = [];
	stack.push(root);
	while (stack.length > 0) {
		let node = stack.pop();
		res.push(node.val);
		if (node.left) stack.push(node.left);
		if (node.right) stack.push(node.right);
	}
	return res.reverse();
};

// 递归
var postorderTraversal = function(root,array = []) {
	if (root) {
		postorderTraversal(root.left,array);
		postorderTraversal(root.right,array);
		array.push(root.val);
	}
	return array;
};