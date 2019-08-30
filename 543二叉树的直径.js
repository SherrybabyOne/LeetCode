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
    function depth (root) {
        if (root === null) return 0;
        let leftDepth = depth(root.left);
        let rightDepth = depth(root.right);
        max = Math.max(max,leftDepth + rightDepth);
        return Math.max(leftDepth,rightDepth) + 1;
    }
    depth(root);
    return max;
};