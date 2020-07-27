function maxInWindows(num, size) {
  if (!num || size < 1 || num.length < size) return [];
  const queue = [];
  const res = [];
  for (let i = 0; i < num.length; i++) {
    while (queue.length !== 0 && num[queue[queue.length - 1]] < num[i]) {
      queue.pop();
    }
    queue.push(i);
    if (queue[0] + size <= i) {
      queue.shift();
    }
    if (i + 1 >= size) {
      res.push(num[queue[0]]);
    }
  }
  return res;
}