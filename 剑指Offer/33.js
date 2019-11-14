// 面试题33: 二叉搜索树的后序遍历序列

const verifyOfBST = (sequence) => {
  if(!sequence) return false
  const len = sequence.length
  const root = sequence[len - 1]
  let i = 0
  for(;i < len - 1; i ++) {
    if(sequence[i] > root) break;
  }
  for(let j = i; j < len - 1; j++) {
    if(sequence[j] < root) return false
  }
  let left = true
  let right = true
  if(i > 0) {
    left = verifyOfBST(sequence.slice(0, i))
  }
  if(i < len - 1) {
    right = verifyOfBST(sequence.slice(i, len - 1))
  }
  return left && right
}

console.log(
  verifyOfBST([5, 7, 6, 9, 11, 10, 8]),
  verifyOfBST([7, 4, 6, 5])
)