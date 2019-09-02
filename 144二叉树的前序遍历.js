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
var preorderTraversal = function(root,array = []) {
    if (root) {
        array.push(root.val);
        preorderTraversal(root.left,array);
        preorderTraversal(root.right, array)
    }
    return array
};


// 迭代的方法
var preorderTraversal = function(root) {
    if (root === null) return [];
    let stack = [];
    let res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        if (node === null) continue;
        res.push(node.val);
        stack.push(node.right);
        stack.push(node.left);
    }
    return res;
};