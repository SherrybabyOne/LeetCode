// 二维数组中的查找
let find = (matrix, number) => {
  let res = false;
  let rows = matrix.length;
  let columns = matrix[0].length;
  if(matrix) {
    let row = 0;
    let column = columns - 1;
    while(row < rows && column >= 0) {
      if(matrix[row][column] === number) {
        res = true;
        break;
      }else if (matrix[row][column] > number) {
        column--;
      }else {
        row++;
      }
    }
  }
  return res;
}
console.log(
  find(
    [
      [1,2,8,9],
      [2,4,9,12],
      [4,7,10,13],
      [6,8,11,15]
    ],
    6
  )
)