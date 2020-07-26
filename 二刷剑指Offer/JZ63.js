const arr = [];
function Insert(num) {
  if (!arr.length) {
    arr.push(num);
    return;
  }
  const index = findIndex(num);
  arr.splice(index, 0, num);
}
function GetMedian() {
  const len = arr.length;
  if (len % 2 === 1) {
    return arr[Math.floor(arr.length / 2)]
  } else {
    const left = arr[len / 2 - 1];
    const right = arr[len / 2];
    return (left + right) / 2;
  }
}
function findIndex(val) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    const mid = i + Math.floor((j - i) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return i;
}