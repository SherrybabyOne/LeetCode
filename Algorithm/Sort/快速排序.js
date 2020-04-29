// 五、快速排序
// 时间复杂度; O(n*log(n))
function quickSort(arr) {
  checkArray(arr);
  quick(arr, 0, arr.length - 1);
  return arr;
}
function quick(arr, start, end) {
  if(start === end) return;
  const index = partition(arr, start, end);
  if(index > start) quick(arr, start, index - 1);
  if(index < end) quick(arr, index + 1, end);
}
// 该方法的实现目的是: 在数组arr中从start到end中选择中间一项为主元，比主元小的排到主元左边，比主元大的排到主元右边，返回主元的索引
function partition(arr, start, end) {
  let index = Math.floor((start + end) / 2);
  swap(arr, index, end);

  let small = start - 1;
  for(index = start; index < end; index++) {
    if(arr[index] < arr[end]) {
      small++;
      if(small !== index) {
        swap(arr, small, index);
      }
    }
  }
  small++;
  swap(arr, small, end);
  return small;
}
console.log(quickSort([2,6,1,8,5]))