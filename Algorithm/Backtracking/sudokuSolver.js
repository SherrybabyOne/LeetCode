// 数独解题器（回溯解法）
const sudokuSolver = matrix => {
  if (solveSudoku(matrix)) {
    return matrix;
  }
  return '问题无解！';
}
const solveSudoku = matrix => {
  let row = 0;
  let col = 0;
  let checkBlankSpaces = false;
  for (row = 0; row < matrix.length; row++) {
    for(col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {
        checkBlankSpaces = true;
        break;
      }
    }
    if (checkBlankSpaces) {
      break;
    }
  }
  if (!checkBlankSpaces) {
    return true;
  }
  for (let num = 1; num <= 9; num++) {
    if (isSafe(matrix, row, col, num)) {
      matrix[row][col] = num;
      if (solveSudoku(matrix)) {
        return true;
      }
      matrix[row][col] = 0;
    }
  }
  return false;
}
const isSafe = (matrix, row, col, num) => {
  return (
    !usedInRow(matrix, row, num) &&
    !usedInCol(matrix, col, num) &&
    !usedInBox(matrix, row - (row % 3), col - (col % 3), num)
  )
}
const usedInRow = (matrix, row, num) => {
  for (let col = 0; col < matrix.length; col++) {
    if (matrix[row][col] === num) {
      return true;
    }
  }
  return false;
}
const usedInCol = (matrix, col, num) => {
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][col] === num) {
      return true;
    }
  }
  return false;
}
const usedInBox = (matrix, boxStartRow, boxStartCol, num) => {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (matrix[boxStartRow + row][boxStartCol + col] === num) {
        return true;
      }
    }
    return false;
  }
}

const sudokuGrid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
console.log(
  sudokuSolver(sudokuGrid)
)
