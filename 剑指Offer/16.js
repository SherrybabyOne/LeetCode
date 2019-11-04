// 面试题十六: 数值的整数次方
const power = (base, exponent) => {
  if(base === 0 && exponent < 0) throw new Error('Input is illegal');
  if(exponent === 0) return 1;
  if(exponent === 1) return base;
  if(exponent < 0) {
    base = 1 / base;
    exponent = exponent * -1;
  }
  let result = 1;
  while(exponent) {
    result = result * base;
    exponent--;
  }
  return result;
}
console.log(
  power(2, 3),
  power(2, -3)
)