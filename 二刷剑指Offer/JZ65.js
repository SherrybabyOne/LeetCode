function hasPath(matrix, rows, cols, path) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (
        fn(matrix, i, j, rows, cols, path, {})
      ) {
        return true;
      }
    }
  }
  return false;
}
function fn(matrix, row, col, rows, cols, pathRest, hash) {
  const index = row * cols + col;
  if (
    row < 0 || col < 0 || row >= rows || col >= cols
    || matrix[index] !== pathRest[0] || hash[index] === true
  ) {
    return false;
  }
  if (pathRest.length === 1) return true;
  hash[index] = true;
  if (
    fn(matrix, row - 1, col, rows, cols, pathRest.slice(1), hash) ||
    fn(matrix, row + 1, col, rows, cols, pathRest.slice(1), hash) ||
    fn(matrix, row, col - 1, rows, cols, pathRest.slice(1), hash) ||
    fn(matrix, row, col + 1, rows, cols, pathRest.slice(1), hash)
  ) {
    return true;
  }
  hash[index] = false;
  return false;
}
