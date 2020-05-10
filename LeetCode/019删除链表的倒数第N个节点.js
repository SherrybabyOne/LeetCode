/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curr = head;
    let dummy = new ListNode(null);
    dummy.next = head;
    let len = 0;
    while (curr) {
        len++;
        curr = curr.next;
    }
    len = len - n;
    curr = dummy;
    while (len-- > 0) {
        curr = curr.next;
    }
    curr.next = curr.next.next;
    return dummy.next
};


// 一次遍历，双指针法


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(null);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    for (let i = 0; i < n + 1; i++) {
        first = first.next;
    }
    while (first !== null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
};