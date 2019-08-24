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
var detectCycle = function(head) {
    let dataMap = new Map();
    while (head) {
        if(dataMap.has(head)) {
            return head
        }
        dataMap.set(head,1);
        head = head.next;
    }
    return null
};