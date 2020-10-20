// 图
class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Map();
  }
  // 添加顶点
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.add(v, []);
  }
  // 添加边
  addEdge(v, w) {
    if (!this.adjList.get(v)) this.addVertex(v);
    if (!this.adjList.get(w)) this.addVertex(w);
    this.adjList.get(v).push(w);
    if (!this.isDirected) {
      this.adjList.get(w).push(v);
    }
  }
  // 获取顶点列表
  getVertices() {
    return this.vertices;
  }
  // 获取邻接表
  getAdjList() {
    return this.adjList;
  }
}