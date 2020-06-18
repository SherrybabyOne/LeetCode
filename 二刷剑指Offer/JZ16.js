/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
  if (!pHead1 && !pHead2) return null;
  if (!pHead1) return pHead2;
  if (!pHead2) return pHead1;
  const root = new ListNode();
  let cur = root;
  while (pHead1 || pHead2) {
    if (!pHead1) {
      cur.next = pHead2;
      break;
    }
    if (!pHead2) {
      cur.next = pHead1;
      break;
    }
    if (pHead1.val <= pHead2.val) {
      cur.next = pHead1;
      cur = pHead1;
      pHead1 = pHead1.next;
    } else {
      cur.next = pHead2;
      cur = pHead2;
      pHead2 = pHead2.next;
    }
  }
  return root.next;
}

function Merge(pHead1, pHead2) {
  if (!pHead1) return pHead2;
  if (!pHead2) return pHead1;
  if (pHead1.val < pHead2.val) {
    pHead1.next = Merge(pHead1.next, pHead2);
    return pHead1;
  } else {
    pHead2.next = Merge(pHead1, pHead2.next);
    return pHead2;
  }
}

