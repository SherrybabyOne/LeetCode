// 面试题38: 字符串的排序


const permutation = (str) => {
  if(!str.length) return '';
  permutation2(str, 0)
  return;
}
var permutation2 = (str, begin) => {
  if(begin === str.length - 1) {
    console.log(str)
  }else {
    for(let ch = begin; ch < str.length; ch++) {
      str = substitution(str, ch, begin)
      permutation2(str, begin + 1)
    }
  }
}
var substitution = (str, l, r) => {
  let arr = str.split('')
  const temp = arr[l]
  arr[l] = arr[r];
  arr[r] = temp;
  return arr.join('')
}

console.log(
  permutation('abc')
)