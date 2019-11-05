// 面试题17: 打印从1到最大的n位数

// 初试
// 存在问题: 没有规定n的范围，当输入n很大的时候会溢出，这种方法不行
const printToMaxOfDigits1 = (n) => {
  if(n <= 0) return;
  let number = 1;
  let i = 0;
  while(i++ < n) {
    number = number * 10;
  }
  for(let i = 1; i < number; i++) {
    console.log(i)
  }
}
// printToMaxOfDigits1(3);


// 可以使用字符串或者数组来表达大数
// 这里使用数组
const printToMaxOfDigits = (n) => {
  if(n <= 0) return;
  let number = new Array(n + 1).fill('0');
  while(1) {
    // 执行操作
    const temp =  (parseInt(number.join('')) + 1) + '';
    for(let i = temp.length - 1, j = 0; i >= 0; i--, j++) {
      number[n - j] = temp[i];
    }
    if(number[0] !== '1') {
      console.log(parseInt(number.join('')))
    }else break;
  }
}
printToMaxOfDigits(4)