const MaxHeap = require('./MaxHeap');
const MinHeap = require('./MinHeap');
// 可以使用二叉堆来实现一个非常著名的算法：堆排序算法
// 最大堆可以得到一个升序排列的数组
// 最小堆可以得到一个讲叙排列的数组
function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

const heapSort = function(array) {
  if (!array) return undefined;
  if (array.length < 2) return array;
  const heap = new MaxHeap();
  let heapSize = array.length;
  for (let i = 0; i < heapSize; i++) {
    heap.insert(array[i]);
  }
  while(heapSize > 0) {
    swap(heap.heap, 0, --heapSize);
    heap.heapify(heap.heap, 0, heapSize);
  }
  return heap.heap;
}

MaxHeap.prototype.heapify = function(array, index, size) {
  let element = index;
  const left = this.getLeftIndex(index);
  const right = this.getRightIndex(index);
  if (left < size && array[left] > array[element]) {
    element = left;
  }
  if (right < size && array[right] > array[element]) {
    element = right;
  }
  if (element !== index) {
    swap(array, element, index);
    this.heapify(array, element, size);
  }
}

const arr = [7, 6, 3, 5 ,4, 1, 2];
heapSort(arr);
console.log(heapSort(arr));
// console.log(arr);
