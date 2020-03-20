/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const len = candidates.length;
  const res = [];
  dfs(0, target, len, [], candidates, res);
  return res;
};
function dfs (begin, reTarget, len, path, candidates, res) {
  if (reTarget === 0) {
    res.push(JSON.parse(JSON.stringify(path)));
    return;
  }
  for (let i = begin; i < len; i++) {
    if (i > begin && candidates[i] === candidates[i - 1]) {
      continue;
    }
    if (reTarget - candidates[i] < 0) break;
    path.push(candidates[i]);
    dfs(i + 1, reTarget - candidates[i], len, path, candidates, res);
    path.pop();
  }
}

combinationSum2([10,1,2,7,6,1,5], 8)