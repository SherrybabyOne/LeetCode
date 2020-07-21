// 快速排序
// 时间复杂度; O(n*logn)
// 步骤：
// 1. 选择一个值为主元（也就是数组中间的那个值）
// 2. 创建两个指针分别指向第一个和最后一个，移动左指针直到找到比主元大的值，
// 移动右指针直到找到比主元小的值，然后交换它们。直到左指针超过了右指针。
// 这个过程使得比主元小的都排到最终的左指针之前，大于等于主元的都排到右指针之后。称为划分（partition）操作。
// 3. 对划分后的两个自数组重复2的步骤，直至整个数组完全排序
function quickSort(arr) {
  quick(arr, 0, arr.length - 1);
  return arr;
}
function quick(arr, start, end) {
  if (arr.length > 1) {
    const index = partition(arr, start, end);
    if (start < index - 1) {
      quick(arr, start, index - 1);
    }
    if (index < end) {
      quick(arr, index, end);
    }
  }
}
// 该方法的实现目的是: 在数组arr中从start到end中选择中间一项为主元，比主元小的排到主元左边，比主元大的排到主元右边
function partition(arr, start, end) {
  const pivot = arr[Math.floor((start + end) / 2)];
  let i = start;
  let j = end;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return i;
}