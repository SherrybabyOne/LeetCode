// 面试题21: 调整数组顺序使奇数位于偶数前面

const reorderEvenOdd = (arr) => {
  if(!arr || arr.length === 0) return;
  let begin = 0;
  let end = arr.length - 1;
  while(begin < end) {
    while(begin < end && arr[begin] % 2 != 0) {
      begin++;
    }
    while(begin < end && arr[end] % 2 == 0) {
      end--;
    }
    if(begin < end) {
      [arr[begin], arr[end]] = [arr[end], arr[begin]];
    }
  }
  return arr;
}
console.log(
  reorderEvenOdd([1,2,3,4,5])
)