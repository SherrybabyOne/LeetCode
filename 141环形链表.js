/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 第一种解法
var hasCycle = function(head) {
    let dataMap = new Map();
    while (head) {
        if(dataMap.has(head)) {
            return true
        }
        dataMap.set(head,1);
        head = head.next;
    }
    return false
};

// 第二种解法：双指针解法
var hasCycle = function (head) {
    let fast = low = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        low = low.next;
        if(fast === low) {
            return true
        }
    }
    return false
}