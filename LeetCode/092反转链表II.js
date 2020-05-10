/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if(!head) return null;
  const count = n - m;
  if(!count) return head;

  let p = HEAD = new ListNode();
  p.next = head;
  for(let i = 0; i < m - 1; i++) {
    p = p.next;
  }
  let front, tail, prev, curr;

  // 反转区之前间的一个节点
  front = p;
  prev = tail = p.next;
  curr = prev.next;
  // 反转区间
  for(let i = 0; i < count; i++) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  front.next = prev;
  tail.next = curr;
  return HEAD.next;
};