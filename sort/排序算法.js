// 冒泡排序
const bubbleSort = arr => {
  for(let i = arr.length - 1; i > 0; i--) {
    for(let j = 0; j < i; j ++) {
      if(arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}
// 选择排序
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

console.log(bubbleSort([2,6,1,8,5]))
console.log(selectSort1([2,6,1,8,5]))
console.log(selectSort2([2,6,1,8,5]))