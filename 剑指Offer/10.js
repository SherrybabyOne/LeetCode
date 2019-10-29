// 从1加到100
// 方法一: 递归
function addNum1(n) {
  return n === 0 ? 0 : n + addNum1(n - 1);
}
console.log(
  addNum1(100)
)
// 方法二: 循环
function addNum2(n) {
  let res = 0;
  while(n > 0) {
    res += n;
    n--;
  }
  return res;
}
console.log(addNum2(100))
// 斐波那契数列
// 方法一: 循环
function fibonacci1(n) {
  let res = [0, 1, 1];
  if(n <= 2) {
    return res[n]
  }
  let fibNumber = 1;
  let fibNumberOne = 1;
  let fibNumberTwo = 1;
  for(let i = 3; i <= n; i++) {
    fibNumber = fibNumberOne + fibNumberTwo;
    [fibNumberOne, fibNumberTwo] = [fibNumberTwo, fibNumber];
  }
  return fibNumber;
}
console.log(fibonacci1(5))
// 方法二: 使用动态规划
function fibonacci2(n, hash = new Map()) {
  if(n <= 0) return 0;
  else if(n <= 2) return 1;
  else {
    if(hash.has(n)) return hash.get(n)
    else {
      hash.set(n, (fibonacci2(n - 1) + fibonacci2(n - 2)))
    }
    return fibonacci2(n - 1) + fibonacci2(n - 2);
  }
}
console.log(fibonacci2(8))