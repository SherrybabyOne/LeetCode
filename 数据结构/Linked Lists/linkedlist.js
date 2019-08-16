// 单链表：
// 1. 单链表是表示一系列节点的数据结构，其中每个节点指向列表中的下一个节点。
// 2. 单链表需要遍历整个操作列表，因此性能较差

// 单链表的操作核心：
// 1. push（value） - 在链表的末尾/头部添加一个节点
// 2. pop（） - 从链表的末尾/头部删除一个节点
// 3. get（index） - 返回指定索引处的节点
// 4. delete（index） - 删除指定索引处的节点
// 5. isEmpty（） - 根据列表长度返回true或false
// 6. print（） - 返回链表的可见表示

class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        // 长度(非必要)
        this.length = 0;
    }
    push (data) {
        // 创建一个节点
        const node = new Node(data);
        // 检查头部是否为空
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
    }
    pop () {
        // 先检查链表是否为空
        if(this.isEmpty()) {
            return false
        }
        // 如果长度为1
        if(this.head === this.tail) {
            let out = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return out;
        }
    }
}