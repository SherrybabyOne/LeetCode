function rectCover(number) {
  if (number <= 2) return number;
  let pre = 1;
  let current = 2;
  let temp;
  for (let i = 3; i <= number; i++) {
    temp = current;
    current = pre + current;
    pre = temp;
  }
  return current;
}
