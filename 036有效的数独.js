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
      if (board[i][j] !== '') {
        const box_index = 
      }
    }
  }
};