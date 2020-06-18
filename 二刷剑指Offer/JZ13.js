function reOrderArray(array) {
  let i = 0;
  let temp;
  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 === 1) {
      if (i === j) {
        i++;
        continue;
      } else {
        temp = array[j];
        for (let index = j; index > i; index--) {
          array[index] = array[index - 1];
        }
        array[i] = temp;
        i++;
      }
    }
  }
  return array;
}

console.log(
  reOrderArray([1, 2, 3, 4, 5])
)
