/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let res = 0;
  const n = heights.length;
  for (let i = 0; i < n; i++) {
    let minHeight = Infinity;
    for (let j = i; j < n; j++) {
      minHeight = Math.min(heights[j], minHeight);
      res = Math.max(res, minHeight * (j - i + 1));
    }
  }
  return res;
};