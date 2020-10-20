// Dijkstra算法
// 从单个源到所有其它源的最短路径的贪心算法
const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];
const INF = Number.MAX_SAFE_INTEGER;

const dijkstra = (graph, src) => {
  // 每一个顶点距离源顶点的距离
  const dist = [];
  // 顶点的距离是否已经确定
  const visited = [];
  const len = graph.length;
  for (let i = 0; i < len; i++) {
    dist[i] = INF;
    visited[i] = false;
  }
  // 把源顶点到自己的距离设置为0
  dist[src] = 0;
  for (let i = 0; i < len - 1; i++) {
    // 从尚未处理的顶点当中选出距离最近的顶点
    const u = minDistance(dist, visited);
    visited[u] = true;
    for (let j = 0; j < len; j++) {
      if (visited[j] === false &&
        graph[u][j] !== 0 &&
        dist[u] !== INF &&
        dist[u] + graph[u][j] < dist[j]
      ) dist[j] = dist[u] + graph[u][j];
    }
  }
  return dist;
};
// 从尚未处理的顶点当中选出距离最近的顶点
const minDistance = (dist, visited) => {
  let min = INF;
  let minIndex = -1;
  for (let i = 0; i < dist.length; i++) {
    if (visited[i] === false && dist[i] <= min) {
      min = dist[i];
      minIndex = i;
    }
  }
  return minIndex;
};
console.log(
  dijkstra(graph, 0)
)