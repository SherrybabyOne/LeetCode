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
var getIntersectionNode = function(headA, headB) {
    let lastHeadA = headA;
    let lastHeadB = headB;
    while (!headA && !headB) {
        if (headA === null) {
            headA = lastHeadB;
        } else {
            headA = headA.next;
        }
        if (headB === null) {
            headB = lastHeadA;
        } else {
            headB = headB.next;
        }
        if (headA === headB) {
            return headA;
        }
    }
};