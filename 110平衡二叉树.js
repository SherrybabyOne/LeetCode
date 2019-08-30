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
var isBalanced = function(root) {
    if (root === null) return true
    let res = true;
    var maxDepth = function(root) {
        if (root === null) return 0;
        return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
    };
    let l = maxDepth(root.left);
    let r = maxDepth(root.right);
    if (Math.abs(l - r) > 1) res = false
    return res && isBalanced(root.left) && isBalanced(root.right);
};