/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
var deleteDuplication = function(pHead) {
  if (!pHead || !pHead.next) return pHead;
  const dummy = new ListNode(null);
  dummy.next = pHead;
  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let temp = cur.next;
      while (temp && temp.next && temp.val === temp.next.val) {
        temp = temp.next;
      }
      cur.next = temp.next;
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};