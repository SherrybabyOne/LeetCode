// 先进先出的数据结构
// 浏览器/NodeJs中关于宏任务和微任务
class Queue {
    constructor(...items) {
        this.reverse = false;
        this.queue = [...items];
    }

    enqueue(...items) {
        this.reverse ? this.queue.push(...items) : this.queue.unshift(...items);
    }

    dequeue() {
        this.reverse ? this.queue.shift() : this.queue.pop();
    }
}

const queue = new Queue(1, 2);
queue.enqueue(3, 4);
queue.dequeue();
console.log(queue);