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
function Node (value) {
    this.value = value;
    this.next = undefined;
}
function NodeList (arr) {
    // 声明链表的头部节点
    let head = new Node(arr.shift());
    let next = head;
    arr.forEach(element => {
        next.next = new Node(element);
        next = next.next;
    });
    return head
}
// 交换两个节点的值
let swap = (p,q) => {
    [p.value,q.value] = [q.value,p.value];
}

// 寻找基准元素的节点
let partion = (begin,end) => {
    let value = begin.value;
    let p = begin;
    let q = begin.next;
    while (q!==end) {
        if(q.value < value) {
            p = p.next;
            swap(p,q)
        }
        q = q.next;
    }
    //  让基准元素跑到中间中
    swap(p,begin)
    return p
}

var sortList = function(begin,end) {
    if (begin !== end) {
        let part = partion(begin,end);
        sortList(begin,part);
        sortList(part.next,end)
    }
};

let head = new NodeList([4,1,3,2,7,9,10,12,6]);
sortList(head);
let res = [];
let next = head;
while (next) {
    res.push(next.value);
    next = next.next;
}

console.log(
    res
)

