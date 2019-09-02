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

//  递归
var inorderTraversal = function(root, array = []) {
    if (root) {
        inorderTraversal(root.left, array);
        array.push(root.val);
        inorderTraversal(root.right, array)
    }
    return array
};

// 迭代
var inorderTraversal = function(root) {
    let res = [];
    let stack = [];
    let node;
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        node = stack.pop();
        res.push(node.val);
        root = node.right;
    }
    return res;
};