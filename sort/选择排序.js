// 选择排序：原址比较排序算法。大致思路是找到数据结构中的最小值并将其放在第一位，
// 接着找到第二小值并将其放在第二位，以此类推。
// 时间复杂度: O(n^2)
const selectionSort = arr => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }
    if (minIndex !== i) [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
};

console.log(selectionSort([2,6,1,8,5]));
console.log(selectionSort([5,4,3,2,1]));
