/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(!head || !head.next) return head;
  const dummy = new ListNode(null);
  dummy.next = head;
  let current = dummy;
  while(current.next && current.next.next) {
    if(current.next.val === current.next.next.val) {
      let temp = current.next;
      while(temp && temp.next && temp.val === temp.next.val) {
        temp = temp.next;
      }
      current.next = temp.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
};