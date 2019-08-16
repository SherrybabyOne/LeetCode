class Queue {
    constructor (...items) {
        this.data = [...items];
    }
    enqueue (...items) {
        return this.data.unshift(...items)
    }
    dequeue () {
        return this.data.shift();
    }
}

const queue = new Queue(3,4,5);
console.log(
    queue,
    queue.dequeue(),
    queue.enqueue(6)
)