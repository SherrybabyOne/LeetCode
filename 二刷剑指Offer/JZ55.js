/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
  let fast = pHead;
  let slow = pHead;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) break;
  }
  if (!fast || !fast.next) return null;
  fast = pHead;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
}