// BFS：广度优先遍历
// 先宽后深地访问顶点
const breadthFirstSearch = node => {
  if (!node) return null;
  const nodeList = [];
  const queue = [node];
  while (queue.length) {
    const item = queue.shift();
    nodeList.push(item);
    const children = item.children;
    for (let i = 0; i < children.length; i++) {
      queue.push(children[i]);
    }
  }
  return nodeList;
}
