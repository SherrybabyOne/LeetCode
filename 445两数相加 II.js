/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Stack = [];
    let l2Stack = [];
    while (l1 !== null) {
        l1Stack.push(l1.val);
        l1 = l1.next;
    }
    while (l2 !== null) {
        l2Stack.push(l2.val);
        l2 = l2.next;
    }
    let head = 0;
    let flag = 0;
    while (l1Stack.length || l2Stack.length || flag) {
        let value = 0;
        if (l1Stack.length) {
            value += l1Stack.pop();
        }
        if (l2Stack.length) {
            value += l2Stack.pop();
        }
        value += flag;
        flag = Math.floor(value / 10);
        let node = new ListNode(value % 10);
        node.next = head;
        head = node;
    }
    return head
};