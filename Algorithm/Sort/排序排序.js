// 四、归并排序
function mergeSort(arr) {
  if(arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  // 拆分成两个数组
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const res = [];
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      res.push(left.shift())
    }else {
      res.push(right.shift())
    }
  }
  while(left.length) res.push(left.shift());
  while(right.length) res.push(right.shift());

  return res;
}
console.log(
  mergeSort([2,6,1,8,5])
)




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