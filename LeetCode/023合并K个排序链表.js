/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  for (let i = 0; i < lists.length; i++) {
    if (!lists[i]) {
      lists.splice(i, 1);
    }
  }
  if(lists.length === 0) return null;
  if(lists.length === 1) return lists[0];
  let res = mergeTwoLists(lists[0], lists[1]);
  for(let i = 2; i < lists.length; i++) {
    res = mergeTwoLists(res, lists[i]);
  }
  return res;
};

var mergeTwoLists = function(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
};