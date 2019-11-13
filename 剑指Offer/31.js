// 面试题31: 栈的压入、弹出序列

const isPopOrder = (pPush, pPop) => {
  let bPossible = false
  if(pPush && pPop) {
    const stack = []
    for(let i = 0; i < pPush.length; i++) {
      stack.push(pPush[i])
      while(stack[stack.length - 1] === pPop[0] && stack.length && pPop.length) {
        pPop.shift()
        stack.pop()
      }
    }
    if(stack.length === 0) bPossible = true
  }
  return bPossible
}

console.log(
  isPopOrder([1,2,3,4,5], [4,5,3,2,1]),
  isPopOrder([1,2,3,4,5], [4,3,5,1,2]),
)