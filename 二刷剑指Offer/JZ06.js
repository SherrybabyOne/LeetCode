function minNumberInRotateArray(rotateArray) {
  if (!rotateArray) return 0;
  if (rotateArray.length === 0) return 0;
  let low = 0;
  let high = rotateArray.length - 1;
  let mid;
  while (low < high) {
    if (rotateArray[low] < rotateArray[high]) {
      return rotateArray[low];
    }
    mid = Math.floor((low + high) / 2);
    if (rotateArray[mid] < rotateArray[high]) {
      high = mid;
    } else if (rotateArray[mid] > rotateArray[high]) {
      low = mid + 1;
    } else {
      high--;
    }
  }
  return rotateArray[low];
}