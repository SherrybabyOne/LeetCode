// 用两个栈实现一个队列
class Queue {
  constructor(stack1 = [], stack2 = []) {
    this.stack1 = stack1;
    this.stack2 = stack2;
  }
  appendTail(val) {
    this.stack1.push(val)
  }
  deleteTail() {
    if(this.stack2.length <= 0) {
      while(this.stack1.length > 0) {
        const temp = this.stack1.pop();
        this.stack2.push(temp);
      }
    }
    if(this.stack2.length === 0) {
      throw new Error('queue if empty');
    }
    return this.stack2.pop()
  }
}
const queueTset = new Queue()
queueTset.appendTail('a')
queueTset.appendTail('b')
queueTset.appendTail('c')
queueTset.deleteTail()
queueTset.deleteTail()
queueTset.deleteTail()
queueTset.appendTail('d')
console.log(
  queueTset.deleteTail()
)