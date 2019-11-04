// 面试题十四: 剪绳子

// 方法一: 动态规划
// 时间复杂度： O(n^2) 空间复杂度: O(1)
const maxProductAfter1 = (length) => {
  if(length < 2) return 0;
  if(length === 2) return 1;
  if(length === 3) return 2;
  const products = [0, 1, 2, 3];
  let max;
  for(let i = 4; i <= length; i++) {
    max = 0;
    for(let j = 1; j <= i / 2; j++) {
      if(products[j] * products[i - j] > max) {
        max = products[j] * products[i - j];
      }
      products[i] = max;
    }
  }
  max = products[length];
  return max;
}
console.log(
  maxProductAfter1(8)
)

// 方法二: 贪婪算法
// 时间复杂度： O(1) 空间复杂度: O(1)
const maxProductAfter2 = (length) => {
  if(length < 2) return 0;
  if(length === 2) return 1;
  if(length === 3) return 2;
  let timesOf3 = Math.floor(length / 3);
  if(length - timesOf3 * 3 === 1) timesOf3--;
  const timesOf2 = (length - timesOf3 * 3)/2;
  return Math.pow(3,timesOf3) * Math.pow(2,timesOf2);
}
console.log(
  maxProductAfter2(5)
)