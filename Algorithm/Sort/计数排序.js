// 计数排序
// 分布式排序，是一个正整数排序算法
// 时间复杂度：O(n)
// 需要更多的内存来存放临时数组
const countingSort = arr => {
  if (arr.length < 2) return arr;
  const maxValue = findMaxValue(arr);
  const counts = new Array(maxValue + 1);

  arr.forEach(element => {
    if (!counts[element]) counts[element] = 0;
    counts[element]++; 
  })

  let sortedIndex = 0;
  counts.forEach((count, i) => {
    if (count > 0) arr[sortedIndex++] = i;
  })
  return arr;
}

const findMaxValue = arr => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(
  countingSort([5, 4, 3, 2, 1]),
  countingSort([9, 6, 2]),
)