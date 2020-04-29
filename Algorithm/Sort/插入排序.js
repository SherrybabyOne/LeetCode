// 插入排序
// 时间复杂度：O(n * n)
// 排序小型数组时，比选择排序和冒泡排序性能要好
const insertionSort = arr => {
  const len = arr.length;
  let temp;
  for (let i = 1; i < len; i++) {
    temp = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

console.log(
  insertionSort([5, 4, 3, 2, 1]),
  insertionSort([3, 5, 1, 4, 2]),
)