// 冒泡排序
// 时间复杂度：O(n * n)
const modifiedBubbleSort = arr => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};

const arr = [5, 4, 3, 2, 1, 0];
modifiedBubbleSort(arr);
console.log(arr);
