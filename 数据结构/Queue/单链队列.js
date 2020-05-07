// 先进先出的数据结构
// 浏览器/NodeJs中关于宏任务和微任务
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(...items) {
    return this.queue.push(...items);
  }
  dequeue() {
    return this.isEmpty() ? undefined : this.queue.shift();
  }
  peek() {
    return this.queue[0];
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.queue = [];
  }
  size() {
    return this.queue.length;
  }
}


function hotPotato(elementsList, num) {
  const queue = new Queue();
  const res = [];
  // 将名字全部打入队列
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }
  // 从队列开头移除一项添加到队列末端，直到num次数截止，队列开头（此时拿到花的人）淘汰。
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    res.push(queue.dequeue());
  }
  return {
    res,
    winner: queue.dequeue(),
  }
}

const names = ['1', '2', '3', '4', '5'];
const result = hotPotato(names, 7);
console.log(result);
