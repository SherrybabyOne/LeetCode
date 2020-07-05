// 树的广度优先遍历
const BFS = root => {
  if (!root) return null;
  const nodeList = [];
  const queue = [root];
  while (queue.length) {
    const item = queue.shift();
    const childen = item.childen;
    nodeList.push(item);
    for (let i = 0; i < childen.length; i++) {
      queue.push(childen[i]);
    }
  }
  return nodeList;
}