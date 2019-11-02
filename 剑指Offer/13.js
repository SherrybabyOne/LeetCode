// 面试题13: 机器人的运动范围
const movingCount = (threshold, rows, cols) => {
  if(threshold < 0 || rows <= 0 || cols <= 0) return 0;
  const visited = [];
  for(let i = 0; i < rows * cols; i++) visited[i] = false;
  const count = movingCountCore(threshold, rows, cols, 0, 0, visited);
  return count;
}
const movingCountCore = (threshold, rows, cols, row, col, visited) => {
  let count = 0;
  if(check(threshold, rows, cols, row, col, visited)) {
    visited[row*cols + col] = true;
    count = 1 + movingCountCore(threshold, rows, cols, row + 1, col, visited)
              + movingCountCore(threshold, rows, cols, row - 1, col, visited)
              + movingCountCore(threshold, rows, cols, row, col + 1, visited)
              + movingCountCore(threshold, rows, cols, row, col - 1, visited);
  }
  return count;
}
const check = (threshold, rows, cols, row, col, visited) => {
  if(row>=0 && col>=0 && row<rows && col<=cols && getDigitSum(row) + getDigitSum(col) <= threshold && !visited[row*cols + col]) {
    return true;
  }
  return false;
}
const getDigitSum = (number) => {
  let sum = 0;
  while(number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

console.log(
  movingCount(
    19, 4, 5
  )
)