/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const rowLen = matrix.length;
  if (!rowLen) return 0;
  const columnLen = matrix[0].length;
  let maxArea = 0;
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < columnLen; j++) {
      maxArea = Math.max(
        fn(i, j, matrix, rowLen, columnLen), maxArea
      );
    }
  }
  return maxArea;
};
const fn = (row, column, matrix, rowLen, columnLen) => {
  if (matrix[row][column] === '0') return 0;
  let m = 1;
  let rowNew = row + 1;
  let columnNew = column + 1;
  while (check(row, column, rowNew, columnNew, matrix, rowLen, columnLen)) {
    rowNew++;
    columnNew++;
    m++;
  }
  return m * m;
};
function check(row, column, rowNew, columnNew, matrix, rowLen, columnLen) {
  if (rowNew >= rowLen || columnNew >= columnLen) return false;
  for (let i = row; i < rowNew; i++) {
    if (matrix[i][columnNew] === '0') return false;
  }
  for (let i = column; i < columnNew; i++) {
    if (matrix[rowNew][i] === '0') return false;
  }
  if (matrix[rowNew][columnNew] === '0') return false;
  return true;
}