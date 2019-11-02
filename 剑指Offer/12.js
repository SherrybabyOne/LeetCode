// 面试题十二
// 矩阵中的路径
// 使用回溯法
const hasPath = (matrix, rows, cols, str) => {
  if(matrix == null || rows < 1 || cols < 1 || str == null) return false;
  const visited = [];

  const pathLength = 0;
  for(let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
      if(hasPathCore(matrix, rows, cols, row, col, str, pathLength, visited)) {
        return true;
      }
    }
  }
  return false;
}
const hasPathCore = (matrix, rows, cols, row, col, str, pathLength, visited) => {
  // 完整字符串取到
  if(str.length == pathLength) return true;
  let hasPath = false;
  if(row>=0 && col>=0 && row<rows && col<cols && matrix[row*cols + col]==str[pathLength] && !visited[row*cols + col]) {
    pathLength++;
    visited[row*cols + col] = true;
    hasPath = hasPathCore(matrix, rows, cols, row, col - 1, str, pathLength, visited)
            || hasPathCore(matrix, rows, cols, row - 1, col, str, pathLength, visited)
            || hasPathCore(matrix, rows, cols, row, col + 1, str, pathLength, visited)
            || hasPathCore(matrix, rows, cols, row + 1, col, str, pathLength, visited)
  }
  if(!hasPath) {
    pathLength--;
    visited[row*cols + col] = false;
  }
  return hasPath;
}

const testData = [
  'a', 'b', 't', 'g',
  'c', 'f', 'c', 's',
  'j', 'd', 'e', 'h'
]
console.log(
  hasPath(
    testData, 3, 4, 'bfce'
  ),
  hasPath(
    testData, 3, 4, 'abfb'
  )
)