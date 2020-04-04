// 递归方法
// 深度遍历

// 先序遍历可用于打印树的结构
const preorderTraversal = function (root, array=[]) {
	if(root) {
		array.push(root.val)
		preorderTraversal(root.left, array);
		preorderTraversal(root.right, array)
	}
	return array;
}

// 中序遍历可用于排序
const inorderTraversal = function (root, array=[]) {
	if (root) {
		inorderTraversal(root.left, array);
		array.push(root.val);
		inorderTraversal(root.right, array);
	}
	return array;
}

// 后序遍历可用于线操作子节点
const postorderTraversal = function (root, array=[]) {
	if (root) {
		postorderTraversal(root.left, array);
		postorderTraversal(root.right, array);
		array.push(root.val);
	}
	return array;
}
