// 冒泡排序
// 时间复杂度: O(n^2)
const bubbleSort = arr => {
  for(let i = arr.length - 2; i > 0; i--) {
    for(let j = 0; j < i; j ++) {
      if(arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}
console.log(bubbleSort([2,6,1,8,5]))




// 选择排序
// 时间复杂度: O(n^2)
const selectSort1 = arr => {
  for(let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    for(let j = i + 1; j < arr.length; j++) {
      if(min > arr[j]) [min, arr[j]] = [arr[j], min];
    }
    arr[i] = min;
  }
  return arr;
}
const selectSort2 = arr => {
  for(let i = 1; i < arr.length; i++) {
    let max = arr[arr.length - i];
    for(let j = 0; j < arr.length - i; j++) {
      if(max < arr[j]) [max, arr[j]] = [arr[j], max];
    }
    arr[arr.length - i] = max;
  }
  return arr;
}
console.log(selectSort1([2,6,1,8,5]))
console.log(selectSort2([2,6,1,8,5]))






// 快速排序
// 时间复杂度; O(n*log(n))
function quickSort(arr) {
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
  [arr[index], arr[end]] = [arr[end], arr[index]];

  let small = start - 1;
  for(index = start; index < end; index++) {
    if(arr[index] < arr[end]) {
      small++;
      if(small !== index) {
        [arr[small], arr[index]] = [arr[index], arr[small]];
      }
    }
  }
  small++;
  [arr[small], arr[end]] = [arr[end], arr[small]];
  return small;
}
console.log(quickSort([2,6,1,8,5]))