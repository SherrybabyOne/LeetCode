/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || matrix.length === 0) return false;
  const m = matrix.length;
  const n = matrix[0].length;
  let i = 0;
  let j = n - 1;
  while (i >= 0 && i < m && j >= 0 && j < n) {
    if (matrix[i][j] === target) return true;
    else if (matrix[i][j] > target) j--;
    else i++;
  }
  return false;
};