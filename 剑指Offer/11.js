// 旋转数组的最小数字
function min(arr) {
  if(!arr) return;
  let index1 = 0;
  let index2 = arr.length - 1;
  let indexMid = index1;
  while(arr[index1] >= arr[index2]) {
    if(index1 - index2 === 1) {
      indexMid = index2;
      break;
    }
    indexMid = Math.floor((index1 + index2) / 2);
    if(arr[indexMid] >= arr[index1]) {
      index1 = indexMid;
    }else if(arr[indexMid] <= arr[index2]) {
      index2 = indexMid;
    }
  }
  return arr[indexMid];
}