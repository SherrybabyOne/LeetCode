// 顺序/线性搜索
// 时间复杂度：O(n)
const sequentialSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}
