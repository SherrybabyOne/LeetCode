// 面试题十五: 二进制中1的个数
// 运行的次数取决于整数的位数(JS中是32位)
const numberOf1 = (n) => {
  let a = 1;
  let count = 0;
  let flag = 1;
  while(flag) {
    if(flag & n) {
      count++;
    }
    flag = flag<<1;
  }
  return count;
}
console.log(numberOf1(9))

const numberOf1b = (n) => {
  let count = 0;
  while(n) {
    count++;
    n = n & (n - 1);
  }
  return count;
}
console.log(
  numberOf1b(9)
)