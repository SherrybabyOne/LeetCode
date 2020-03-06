/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy;
  let start = end = dummy.next;
  for (let i = 1; i < k && end; i++) {
    end = end.next;
  }
  while (end) {
    const next = end.next;
    end.next = null;
    pre.next = reverse(start);
    pre = start;
    pre.next = next;
    start = end = next;
    for (let i = 1; i < k && end; i++) {
      end = end.next;
    }
  }
  return dummy.next;
};

var reverse = function(startNode) {
  let pre = new ListNode(null);
  let current = startNode;
  while (current) {
    const next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
}