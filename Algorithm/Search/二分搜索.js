// 二分搜索
// 要求是已经排序好的数组
const binarySort = (arr, value) => {
  const sortedArr = arr.sort((a, b) => a - b);
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const pivot = arr[mid];
    if (pivot < value) {
      low = mid + 1;
    } else if (pivot > value) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(
  // binarySort([8, 7, 6, 5, 4, 3, 2, 1], 7),
  binarySort([0, 1], 1),
)
