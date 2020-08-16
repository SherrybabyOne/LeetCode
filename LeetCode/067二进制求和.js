/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  while (a.length > b.length) b = '0' + b
  while (a.length < b.length) a = '0' + a // 先对齐
  let res = new Array(a.length)
  let sum = 0
  let carry = 0 // 进位
  for (let i = a.length - 1; i >= 0; i--) {
    sum = Number(a[i]) + Number(b[i]) + carry
    if (sum >= 2) {
      res[i] = sum - 2
      carry = 1
    } else {
      res[i] = sum
      carry = 0
    }
  }
  if (carry) res.unshift(1) // 循环结束还要进1，则在res数组前端加一个1
  return res.join('')
}
