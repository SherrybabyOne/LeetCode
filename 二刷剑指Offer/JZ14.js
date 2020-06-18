/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
  if (!head || k <= 0) return null;
  let current = head;
  let len = 0;
  while (current) {
    current = current.next;
    len++;
  }
  if (len < k) return null;
  current = head;
  let num = len - k;
  while (num--) {
    current = current.next;
  }
  return current;
}

function FindKthToTail(head, k) {
  if (!head || k <= 0) return null;
  let slow = fast = head;

  while (k--) {
    if (fast) {
      fast = fast.next;
    } else {
      return null;
    }
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
