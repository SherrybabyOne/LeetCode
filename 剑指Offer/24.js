// 面试题24: 反转链表

// pPrev pNode pReversedNode
const reverseList = (head) => {
  let pReversedNode = null;
  let pNode = head;
  let pPrev = null;
  while(pNode) {
    pReversedNode = pNode.next;
    if(!pReversedNode) {
      pNode.next = pPrev;
      return pNode;
    }
    pNode.next = pPrev;
    pPrev = pNode;
    pNode = pReversedNode;
  }
  return head;
}