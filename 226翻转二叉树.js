/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

 //递归的方法
var invertTree = function(root) {
    if (root === null) return null;
    let right = invertTree(root.right);
    let left = invertTree(root.left);
    root.left = right;
    root.right = left;
    return root;
};

//迭代的方法
var invertTree = function(root) {
    if (root === null) return null;
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let current = queue.pop();
        let tmp = current.left;
        current.left = current.right;
        current.right = tmp;
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return root
};