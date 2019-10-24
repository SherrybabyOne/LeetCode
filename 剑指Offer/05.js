// 从头到尾打印链表
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
function list(arr) {
  const head = new ListNode(arr[0]);
  let pre = head;
  for(let i = 1; i < arr.length; i++) {
    pre.next = new ListNode(arr[i]);
    pre = pre.next;
  }
  return head;
}
const textList = list([1,2,3,4,6,5])


// 方法一: 使用数组 O(n) O(1)
const printListReversingly1 = (head) => {
  if(!head) return;
  const res = [];
  while(head != null) {
    res.push(head.val);
    head = head.next;
  }
  return res.reverse()
}
console.log(
  printListReversingly1(textList)
)
// 方法二: 使用递归
const printListReversingly2 = (head, arr = []) => {
  if(head != null) {
    if(head.next != null) {
      printListReversingly2(head.next, arr);
    }
    arr.push(head.val);
  }
  return arr;
}
console.log(
  printListReversingly2(textList)
)