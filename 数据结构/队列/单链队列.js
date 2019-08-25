class Queue {
    constructor () {
        this.queue = [];
    }
    enQueue (item) {
        this.queue.push(item);
    }
    deQueue () {
        return this.queue.shift();
    }
    getHeader () {
        return this.queue[0];
    }
    getLength () {
        return this.queue.length;
    }
    isEmpty () {
        return this.queue.length === 0;
    }
}

// 单链队列的出队操作需要O(n)的时间复杂度