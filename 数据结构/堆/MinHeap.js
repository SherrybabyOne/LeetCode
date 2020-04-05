// 最小堆
class MinHeap {
  constructor () {
    this.heap = [];
  }
  // 插入一个新的值
  insert (val) {
    if (val != null) {
      this.heap.push(val);
      // 上移操作
      this.shiftUp(this.heap.length - 1);
      return true;
    }
    return false;
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
  getLeftIndex (index) {
    return 2 * index + 1;
  }
  // 右子节点的索引
  getRightIndex (index) {
    return 2 * index + 2;
  }
  // 父节点的索引
  getParentIndex (index) {
    if (index === 0) return undefined;
    return Math.floor((index - 1) / 2);
  }
}

function swap (array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}
const heap = new MinHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);
console.log(heap.heap);
