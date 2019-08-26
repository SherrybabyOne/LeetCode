/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


//  哈希表的方法
// 时间复杂度: O(m+n)
// 空间复杂度: O(m)或者O(n)
var getIntersectionNode = function(headA, headB) {
    let map = new Map();
    while (headA) {
        map.set(headA,1)
        headA = headA.next;
    }
    while (headB) {
        if(map.has(headB)) return headB
        headB = headB.next;
    }
    return null
};


// 双指针的方法
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var getIntersectionNode = function(headA, headB) {
    let l1 = headA;
    let l2 = headB;
    while (l1 !== l2) {
        l1 = (l1==null) ? headB : l1.next;
        l2 = (l2==null) ? headA : l2.next;
    }
    return l1
};