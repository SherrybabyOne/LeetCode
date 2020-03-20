/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const res = [];
  const len = candidates.length;
  dfs(0, len, target, new Array(), res, candidates);
  return res;
};

function dfs (begin, len, reTarget, path, res, candidates) {
  if (reTarget === 0) {
    res.push(JSON.parse(JSON.stringify(path)));
    return;
  }
  for (let i = begin; i < len; i++) {
    if (reTarget - candidates[i] < 0) {
      break;
    }
    path.push(candidates[i]);
    dfs(i, len, reTarget - candidates[i], path, res, candidates);
    path.pop();
  }
}

combinationSum([2, 3, 6, 7], 7);