/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 拓扑排序
// 方法一：广度优先遍历
var canFinish = function(numCourses, prerequisites) {
  let res = 0;
  // 存储有向图
  const edges = {};
  // 存储每个节点的入度
  const indeg = new Array(numCourses).fill(0);
  for (let i = 0; i < prerequisites.length; i++) {
    const courseIn = prerequisites[i][0];
    const courseOut = prerequisites[i][1];
    edges[courseOut]
      ? edges[courseOut].push(courseIn)
      :edges[courseOut] = [courseIn];
    indeg[courseIn]++;
  }
  while (indeg.indexOf(0) !== -1) {
    const index = indeg.indexOf(0);
    indeg[index] = -1;
    res++;
    const u = edges[index];
    if (u == undefined) continue;
    for (const k of u) {
      if (indeg[k] > 0) indeg[k]--;
    }
  }
  return res === numCourses;
};

// 方法二：深度优先遍历
var canFinish = function(numCourses, prerequisites) {
  // 记录每个节点的状态   0:未搜索 1:搜索中 2:搜索完成
  const visited = new Array(numCourses).fill(0);
  // 是否合法
  let valid = true;
  // 构建有向图（入度、出度关系）
  const edges = {};
  for (let i = 0; i <  prerequisites.length; i++) {
    const info = prerequisites[i];
    edges[info[1]] ? edges[info[1]].push(info[0]) : edges[info[1]] = [info[0]];
  }

  // 深度优先遍历
  const dfs = u => {
    visited[u] = 1;
    const out = edges[u];
    if (out != undefined) {
      for (let i = 0; i < out.length; i++) {
        const info = out[i];
        if (visited[info] === 1) {
          valid = false;
          return;
        } else if (visited[info] === 0) {
          dfs(info);
          if (!valid) return;
        }
      }
    }
    visited[u] = 2;
  }

  for (let i = 0; i < numCourses; i++) {
    if (visited[i] === 0) {
      dfs(i);
    }
  }
  return valid;
};