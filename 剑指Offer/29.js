// 面试题29: 顺时针打印矩阵

const printMatrixClockwisely = (numbers, columns, rows) => {
  if(!numbers || columns<=0 || rows<=0) return;
  let start = 0;
  while(columns>start*2 && rows>start*2) {
    printMatrixCircle(numbers, columns, rows, start);
    start++;
  }
}
var printMatrixCircle = (numbers, columns, rows, start) => {
  let endX = columns - 1 - start;
  let endY = rows - 1 - start;
  for(let i = 0; i < endX; i++) {
    const number = numbers[start][i];
    console.log(number)
  }
  if(endX < endY) {
    for(let i = start + 1; i < endY; i++) {
      const number = numbers[i][start]
      console.log(number)
    }
  }
  if(start<endX && start<endY) {
    for(let i = endX; i >= start; i--) {
      const number = numbers[endY][i]
      console.log(number)
    }
  }
  if(start<endX && start<endY-1) {
    const number = numbers[i][start];
    console.log(number)
  }
}