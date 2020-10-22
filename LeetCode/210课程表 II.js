/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const res = [];
  // 存储有向图
  const edges = {};
  // 存储每个节点的入度
  const indeg = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    const courseIn = prerequisites[i][0];
    const courseOut = prerequisites[i][1];
    edges[courseOut]
      ? edges[courseOut].push(courseIn)
      : edges[courseOut] = [courseIn];
    indeg[courseIn]++;
  }
  while (indeg.indexOf(0) !== -1) {
    const index = indeg.indexOf(0);
    indeg[index] -= 1;
    res.push(index);
    const u = edges[index];
    if (u == undefined) continue;
    for (const k of u) {
      if (indeg[k] > 0) indeg[k]--;
    }
  }
  return res.length === numCourses ? res : [];
};