function FindNumbersWithSum(array, sum) {
  let i = 0;
  let j = array.length - 1;
  let max = Number.MAX_SAFE_INTEGER;
  let res = [];
  while(i < j) {
    if (array[i] + array[j] === sum) {
      if (array[i] * array[j] < max) {
        max = array[i] * array[j];
        res = [array[i], array[j]];
      }
      i++;
      j--;
    } else if (array[i] + array[j] > sum) {
      j--;
    } else {
      i++;
    }
  }
  return res;
}