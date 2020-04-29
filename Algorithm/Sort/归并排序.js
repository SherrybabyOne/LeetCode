// 归并排序
// 时间复杂度：O(n * logn)
// 归并排序是一种分治思想。将原始数组切分为较小数组，直到每个数组只有一个位置，
// 接着将小数组归并成较大数组，直到最后只有一个排序完毕的大数组。
// FireFox使用归并排序作为Array.prototype.sort实现
const insertionSort = arr => {
  if (arr.length > 1) {
    const len = arr.length;
    const middle = Math.floor(len / 2);
    const left = insertionSort(arr.slice(0, middle));
    const right = insertionSort(arr.slice(middle));
    arr = merge(left, right);
  }
  return arr;
}

const merge = (left, right) => {
  let i = 0;
  let j = 0;
  const res = [];
  while (i < left.length && j < right.length) {
    res.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  return res.concat(i < left.length ? left.slice(i) : right.slice(j));
}

console.log(
  insertionSort([5, 4, 3, 2, 1]),
  insertionSort([5, 2, 8, 3, 0, 1]),
)
