// 面试题32: 从上到下打印二叉树

const printFromTopToBottom = (root) => {
  const queue = []
  const nodeList = []
  if(!root) {
    queue.push(root)
    while(queue.length) {
      const item = queue.shift()
      nodeList.push(item)
      if(item.left) queue.push(item.left)
      if(item.right) queue.push(item.right)
    }
  }
  return nodeList
}