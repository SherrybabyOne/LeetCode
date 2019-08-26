// 广度优先遍历(一层一层地遍历树)

class Tree {
    
    // 树的定义

    breadthTraversal () {
        if (!this.root) return null;
        let q = new Queue();
        // 将根节点入队
        q.enQueue(this.root);
        // 循环判断队列是否为空
        while (!q.isEmpty()) {
            let n = q.deQueue();
            console.log(n.value);
            if (n.left) q.enQueue(n.left);
            if (n.right) q.enQueue(n.right);
        }
    }
}