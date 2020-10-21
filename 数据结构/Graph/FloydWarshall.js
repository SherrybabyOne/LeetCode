// 最短路径算法
// Floyd-Warshall算法是计算最短路径的动态规划方法
const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];
const floydWarshall = graph => {
  const dist = [];
  const len = graph.length;
  for (let i = 0; i < len; i++) {
    dist[i] = [];
    for (let j = 0; j < len; j++) {
      if (i === j) dist[i][j] = 0;
      else if (!isFinite(graph[i][j]) || graph[i][j] === 0) dist[i][j] = Infinity;
      else dist[i][j] = graph[i][j];
    }
  }
  for (let k = 0; k < len; k++) {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist
};