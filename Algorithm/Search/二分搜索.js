// 二分搜索
// 要求是已经排序好的数组
const binarySearch = (arr, value) => {
  const sortedArr = arr.sort((a, b) => a - b);
  let low = 0;
  let high = sortedArr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const pivot = sortedArr[mid];
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

// 分治算法
const binarySearch = (arr, value) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const low = 0;
  const high = sortedArr.length - 1;
  return binarySearchRecursive(arr, value, low, high);
}
const binarySearchRecursive = (arr, value, low, high) => {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const pivot = arr[mid];
    if (pivot < value) {
      return binarySearchRecursive(arr, value, mid + 1, high);
    } else if (pivot > value) {
      return binarySearchRecursive(arr, value, low, mid - 1);
    } else {
      return mid;
    }
  }
  return -1;
}
