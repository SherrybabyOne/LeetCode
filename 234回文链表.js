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
    if (head === null || head.next === null) return true;
    let mid = head;
    let pre = null;
    let reversed = null;
    while (head !== null && head.next !== null) {
        pre = mid;
        // min慢指针，head快指针
        mid = mid.next;
        head = head.next.next;
        pre.next = reversed;
        reversed = pre;
    }
    if (head) mid = mid.next;
    while (mid) {
        if (reversed.val !== mid.val) return false;
        reversed = reversed.next;
        mid = mid.next;
    }
    return true
};