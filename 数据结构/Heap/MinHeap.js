// 最小堆
function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}
class MinHeap {
  constructor() {
    this.heap = [];
  }
  // 插入一个新的值
  insert(val) {
    if (val != null) {
      this.heap.push(val);
      // 上移操作
      this.shiftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }
  findMinimum() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  // 上移操作
  shiftUp (index) {
    let parent = this.getParentIndex(index);
    while (index > 0 && this.heap[index] < this.heap[parent]) {
      swap(this.heap, index, parent);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }
  // 左子节点的索引
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  // 右子节点的索引
  getRightIndex(index) {
    return 2 * index + 2;
  }
  // 父节点的索引
  getParentIndex(index) {
    if (index === 0) return undefined;
    return Math.floor((index - 1) / 2);
  }
}

// 导出最小值
MinHeap.prototype.extract = function() {
  if(this.isEmpty()) return undefined;
  if(this.size() === 1) return this.heap.shift();
  const removedValue = this.heap.shift();
  this.heap.unshift(this.heap.pop());
  // 下移操作
  this.shiftDown(0);
  return removedValue;
}
MinHeap.prototype.shiftDown = function(index) {
  let element = index;
  const left = this.getLeftIndex(index);
  const right = this.getRightIndex(index);
  const size = this.size();
  if (left < size && this.heap[left] < this.heap[element]) {
    element = left;
  }
  if (right < size && this.heap[right] < this.heap[element]) {
    element = right;
  }
  if (element !== index) {
    swap(this.heap, element, index);
    this.shiftDown(element);
  }
}

// const heap = new MinHeap();
// heap.insert(2);
// heap.insert(3);
// heap.insert(4);
// heap.insert(5);
// heap.insert(1);
// console.log(heap.findMinimum());
// console.log(heap.heap);
const heap = new MinHeap();
for (let i = 1; i < 10; i++) {
  heap.insert(i);
}
heap.extract();
console.log(heap.heap);

module.exports = MinHeap;
