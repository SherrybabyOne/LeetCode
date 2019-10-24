// 替换空格
// 在JavaScript中，使用括号访问字符串不可以对其进行删除或添加
let replaceBlank = (str) => {
  let len = str.length;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === ' ') len += 2;
  }
  let p1 = str.length - 1;
  let p2 = len - 1;
  while(p1 >= 0 && p2 > p1) {
    if(str[p1] === ' ') {
      str[p2--] = '0';
      str[p2--] = '2';
      str[p2--] = '%';
    } else {
      str[p2--] = str[p1];
    }
    p1--;
  }
  return str;
}

console.log(
  replaceBlank('We are happy.')
)

// 使用API:
const replaceBlank2 = (str) => {
  return str.replace(/ /g, '20%')
}
console.log(replaceBlank2('We are happy.'))