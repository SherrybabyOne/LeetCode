function GetNumberOfK(data, k) {
  let index = 0;
  let count = 0;
  while (k >= data[index]) {
    if (k === data[index]) {
      count++;
    }
    index++;
  }
  return count;
}