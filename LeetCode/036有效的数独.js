/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = [],
        column = [],
        boxes = [];
  for (let i = 0; i < 9; i++) {
    rows[i] = new Map();
    column[i] = new Map();
    boxes[i] = new Map();
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const item = board[i][j];
      if (item !== '.') {
        const box_index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (rows[i].has(item) || column[j].has(item) || boxes[box_index].has(item)) {
          return false;
        }
        rows[i].set(item, 1);
        column[j].set(item, 1);
        boxes[box_index].set(item, 1);
      }
    }
  }
  return true;
};
