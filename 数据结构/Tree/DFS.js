// DFS 深度优先遍历
const DFS = root => {
  if (!root) return null;
  const nodeList = [];
  const stack = [root];
  while (stack.length) {
    const item = stack.push();
    const children = item.children;
    nodeList.push(item);
    for (let i = children.length - 1; i >= 0; i--) {
      stack.push(children[i]);
    }
  }
  return nodeList;
}

// 递归方法
const DFS = (node, nodeList = []) => {
  if (!node) return;
  nodeList.push(node);
  const children = node.children;
  for (let i = 0; i < children.length; i++) {
    DFS(children[i], nodeList);
  }
  return nodeList;
}