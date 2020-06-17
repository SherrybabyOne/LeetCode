/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
  if (!head) return [];
  const res = [];
  while (head != null) {
    res.unshift(head.val);
    head = head.next;
  }
  return res;
}