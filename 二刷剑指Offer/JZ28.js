function MoreThanHalfNum_Solution(numbers) {
  sort(numbers);
  const cnt = numbers[Math.floor(numbers.length / 2)];
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (cnt === numbers[i]) count++;
  }
  return count > numbers.length / 2 ? cnt : 0;
}

function sort(arr) {
  quickSort(arr, 0, arr.length - 1);
  return arr;
}
function quickSort(arr, start, end) {
  if (arr.length > 1) {
    const index = partition(arr, start, end);
    if (start < index - 1) {
      quickSort(arr, start, index - 1);
    }
    if (index < end) {
      quickSort(arr, index, end);
    }
  }
}
function partition(arr, start, end) {
  const pivot = arr[Math.floor((start + end) / 2)];
  let i = start;
  let j = end;
  while (i < j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return i;
}



// 方法二
function MoreThanHalfNum_Solution(numbers) {
  let res;
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (count === 0) {
      res = numbers[i];
      count++;
    } else {
      if (res === numbers[i]) {
        count++;
      } else {
        count--;
      }
    }
  }
  count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (res === numbers[i]) {
      count ++;
    }
  }
  return count > numbers.length / 2 ? res : 0;
}