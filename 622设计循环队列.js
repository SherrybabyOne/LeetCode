/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.list = Array(k);
    this.front = 0;
    this.rear = 0;
    this.max = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) {
        return false
    } else {
        this.list[this.rear] = value;
        this.rear = (this.rear+1) % this.max;
        return true
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) {
        return false
    }
    this.list[this.front] = '';
    this.front = (this.front + 1) % this.max;
    return true
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()) return -1
    return this.list[this.front]
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()) return -1
    let rear = this.rear-1;
    return this.list[rear<0?this.max-1:rear]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.front === this.rear && !this.list[this.front]
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.front === this.rear && !!this.list[this.front]
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

var circularQueue = new MyCircularQueue(3); // 设置长度为 3
console.log(
    circularQueue.enQueue(1),
    circularQueue.enQueue(2),
    circularQueue.enQueue(3),
    circularQueue.enQueue(4),
    circularQueue.Rear(),
    circularQueue.isFull(),
    circularQueue.deQueue(),
    circularQueue.enQueue(4),
    circularQueue.Rear()
)