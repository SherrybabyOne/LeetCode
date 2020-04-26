// DFS：  深度优先遍历
// 从第一个指定地顶点开始遍历图，沿着路径直到这条路径最后一个顶点被访问了，接着按原路回退并探索下一条路径
// 先深度后广度地访问顶点

// 非递归写法
const depthFirstSearch = node => {
  if (!node) return null;
  const nodeList = [];
  const stack = [node];
  while (stack.length) {
    const item = stack.pop();
    nodeList.push(item);
    const children = item.children;
    for (let i = children.length - 1; i >= 0; i--) {
      stack.push(children[i]);
    }
  }
  return nodeList;
}
// 递归写法
const depthFirstSearch = (node, nodeList = []) => {
  if (!node) return;
  nodeList.push(node);
  const children = node.children;
  for (let i = 0; i < children.length; i++) {
    depthFirstSearch(children[i], nodeList);
  }
  return nodeList;
}
