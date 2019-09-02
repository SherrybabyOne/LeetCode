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

// 迭代
var postorderTraversal = function(root) {
    let res = [];
    let stack = [];
    while (root || stack.length) {
        if (root.left) {
            stack.push(root);
            root = root.left
        } else if (root.right) {
            stack.push(root);
            root = root.right;
        } else {
            res.push(root.val);
            root = stack.pop();
            if (root && root.left) root.left = null;
            else if (root && root.right) root.right = null;
        }
    }
    return res
};



var postorderTraversal = function(root) {
    if (root === null) return [];
    let stack = [];
    let res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        if (node === null) continue;
        res.push(node.val);
        stack.push(node.left);
        stack.push(node.right);
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