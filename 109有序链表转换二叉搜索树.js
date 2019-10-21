/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let nodeList = [];
    while(head) {
      nodeList.push(head.val);
      head = head.next;
    }
    return sortedArrayToBST(nodeList);
};
var sortedArrayToBST = function(nums) {
  if(!nums.length) return null;
  if(nums.length === 0) return new TreeNode(null);
  if(nums.length === 1) return new TreeNode(nums[0]);
  let middle = Math.round(nums.length / 2);
  let root = new TreeNode(nums[middle - 1]);
  root.left = sortedArrayToBST(nums.splice(0, middle - 1));
  root.right = sortedArrayToBST(nums.splice(1));
  return root;
};