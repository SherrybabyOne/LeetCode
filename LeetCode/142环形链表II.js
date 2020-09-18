/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 方法一: 需要使用额外空间
var detectCycle = function(head) {
    const dataMap = new Map();
    while(head) {
        if(dataMap.has(head)) {
            return head;
        }
        dataMap.set(head, 1)
        head = head.next;
    }
    return null;
};
// 方法二:
var detectCycle = function(head) {
    if (!head) return null;
    let intersect = getIntersect(head);
    if (!intersect) return null;
    while (head !== intersect) {
        head = head.next;
        intersect = intersect.next;
    }
    return intersect;
}
function getIntersect(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return slow;
    }
    return null;
}