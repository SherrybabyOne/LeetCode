// 面试题25: 合并两个排序的链表
// LeetCode原题: 21

const mergeTwoLists = (l1, l2) => {
  if(!l1) return l2;
  if(!l2) return l1;
  let pMergedHead = null;
  if(l1.val < l2.val) {
    pMergedHead = l1;
    pMergedHead.next = mergeTwoLists(l1.next, l2);
  }else {
    pMergedHead = l2;
    pMergedHead.next = mergeTwoLists(l1, l2.next);
  }
  return pMergedHead;
}