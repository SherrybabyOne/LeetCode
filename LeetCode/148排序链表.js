/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head) return head;
  const arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  arr.sort((a, b) => a.val - b.val);
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    arr[i].next = arr[i + 1];
  }
  arr[len - 1].next = null;
  return arr[0];
};