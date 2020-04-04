/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  cost.push(0);
  const len = cost.length;
  const temp = [cost[0], cost[1]];
  for (let i = 2; i < len; i++) {
    temp[i] = cost[i] + Math.min(temp[i - 1], temp[i - 2]);
  }
  return temp[len - 1];
};
