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
var isPalindrome = function(head) {
    let map = [];
    while (head !== null) {
        map.push(head.val);
        head = head.next;
    }
    let a = map.join('');
    let b = map.reverse().join('');
    return a === b
};