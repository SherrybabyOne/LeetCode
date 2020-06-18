function Fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let pre = 0;
  let current = 1;
  let index = 2;
  let temp;
  while (index <= n) {
    temp = current;
    current = pre + current;
    pre = temp;
    index++;
  }
  return current;
}

function Fibonacci(n) {
  if (n <= 1) return n;
  let pre = 0;
  let current = 1;
  let temp;
  for (let i = 2; i <= n; i++) {
    temp = current;
    current = pre + current;
    pre = temp;
  }
  return current;
}

function Fibonacci(n) {
  if (n <= 1) return n;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

function Fibonacci(n, arr = []) {
  if (n <= 1) return n;
  if (arr[n] && arr[n] !== -1) return arr[n];
  arr[n] = Fibonacci(n - 1, arr) + Fibonacci(n - 2, arr);
  return arr[n];
}

