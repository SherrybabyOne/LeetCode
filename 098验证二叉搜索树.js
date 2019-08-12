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
var isValidBST = function(root,lower = null,upper = null) {
    if(!root) return true
    let val = root.val;
    if(lower !== null && val <= lowser) return false;
    if(upper !== null && val >= upper) return false;
    return isValidBST(root.left,lowser,val) && isValidBST(root.right,val,upper)
};