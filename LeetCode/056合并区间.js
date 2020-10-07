/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];
  for (const i of intervals) {
    if (ans.length === 0) ans.push(i);
    else {
      const final = ans[ans.length - 1];
      if (i[0] > final[1]) ans.push(i);
      else final[1] = Math.max(final[1], i[1]);
    }
  }
  return ans;
};