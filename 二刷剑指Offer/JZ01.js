function Find(target, array) {
  const lenX = array.length;
  const lenY = array[0].length;
  for (let i = lenX - 1, j = 0; i >= 0 && j < lenY;) {
    if (target < array[i][j]) {
      i--;
    } else if (target > array[i][j]) {
      j++;
    } else {
      return true;
    }
  }
  return false;
}

console.log(
  Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]])
)