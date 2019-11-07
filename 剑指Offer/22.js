// 面试题22: 链表中倒数第k个节点

const findKthToFail = function(head, k) {
  let pAhead = head;
  let pBehind = head;
  for(let i = 0; i < k; i++) {
    pBehind = pBehind.next;
  }
  while(pBehind.next !== null) {
    pAhead = pAhead.next;
    pBehind = pBehind.next;
  }
  return pAhead;
}