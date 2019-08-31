/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if (s === null && t === null) return true;
    if (s === null || t === null) return false;
    if (s.val === t.val) {
        return isSubtreeWithRoot(s,t) || isSubtree(s.left, t) || isSubtree(s.right, t);
    }
    return isSubtree(s.left, t) || isSubtree(s.right, t)
};
function isSubtreeWithRoot (root, t) {
    if (root === null && t === null) return true;
    if (root === null || t === null) return false;
    if (root.val !== t.val) return false;
    return isSubtreeWithRoot(root.left, t.left) && isSubtreeWithRoot(root.right, t.right);
}