function movingCount(threshold, rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push(new Array(cols).fill(0));
  }
  return fn(0, 0, rows, cols, matrix, threshold);
}
function fn(row, col, rows, cols, matrix, threshold) {
  if (row < 0 || col < 0 || row >= rows || col >= cols) {
    return 0;
  } else if (invalid(row, col, threshold)) {
    return 0;
  } else if (matrix[row][col] === 1) {
    return 0;
  } else {
    matrix[row][col] = 1;
    return 1 + fn(row + 1, col, rows, cols, matrix, threshold) + fn(row, col + 1, rows, cols, matrix, threshold);
  }
}
function invalid(row, col, threshold) {
  const numStr = `${row}${col}`;
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return sum > threshold;
}
