/**
 * 
 * @param matrix int整型二维数组 
 * @return int整型一维数组
 */
function spiralOrder( matrix ) {
  const res = [];
  if (!matrix.length) return res;
  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  while (
    top < Math.floor((matrix.length  + 1)/ 2)
    && left < Math.floor((matrix[0].length + 1) / 2)
  ) {
    // 上
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    // 右
    for (let i = top + 1; i <= bottom; i++) res.push(matrix[i][right]);
    // 下
    for (let i = right - 1; i >= left && bottom !== top; i--) res.push(matrix[bottom][i]);
    // 左
    for (let i = bottom - 1; i > top && left !== right; i--) res.push(matrix[i][left]);
    top++;
    bottom--;
    left++;
    right--;
  }
  return res;
}
module.exports = {
  spiralOrder : spiralOrder
};