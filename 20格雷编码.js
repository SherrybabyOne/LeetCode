/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  let recursion = (n) => {
    if (n === 1) return [0, 1]
    let result = recursion(n - 1)
    // << 左移运算符
    // 左移1位相当于乘2,左移n位相当于乘2^n
    let highBit = 1 << n - 1
    // grayCode(1)等于[0,1]
    // grayCode(2)等于[0,1,3,2],3==1+highBit,2==0+highBit
    for (let i = result.length - 1; i >= 0; i--) {
      result.push(result[i] + highBit)
    }
    return result
  }
  if (n === 0) return [0]
  return recursion(n)
};