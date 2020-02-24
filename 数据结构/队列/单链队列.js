// 先进先出的数据结构
// 浏览器/NodeJs中关于宏任务和微任务
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(...items) {
        return this.queue.unshift(...items);
    }
    dequeue() {
        return this.isEmpty() ? undefined : this.queue.shift();
    }
    isEmpty() {
        return this.queue.size === 0;
    }
    size() {
        return this.queue.length;
    }
}

const queue = new Queue();
queue.enqueue(3, 4);
queue.dequeue();
console.log(queue);