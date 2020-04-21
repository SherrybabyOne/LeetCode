// 非递归方法

// 先序遍历
// 使用栈的数据结构
const preorderTraversal = function(root) {
  if (!root) return [];
  const stack = [];
  const res = [];
  stack.push(root);
  while (stack.length > 0) {
    // 取出栈顶元素
    const item = stack.pop();
    res.push(item.val);
    if (item.right) stack.push(item.right);
    if (item.left) stack.push(item.left);
  }
  return res;
};

// 中序遍历
// 用于对BST队形排序操作
const inorderTraversal = function(root) {
  if (!root) return [];
  const stack = [];
  const res = [];
  let current = root;
  while (stack.length > 0 || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    res.push(current.val);
    current = current.right;
  }
  return res;
}

// 后序遍历
// 一种应用是计算一个目录以及子目录中所有文件所占空间的大小
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
