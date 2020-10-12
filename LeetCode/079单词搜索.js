/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;
  const route = new Array(m);
  for (let i = 0; i < m; i++) route[i] = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backTrack(board, i, j, word, 0, route, m, n)) return true;
    }
  }
  return false;
};
const backTrack = (board, i, j, word, cur, route, m, n) => {
  if (
    i >= m
      || i < 0
      || j < 0
      || j >= n
      || board[i][j] !== word[cur]
      || route[i][j] !== 0
  ) return false;
  if (cur === word.length - 1) return true;
  route[i][j] = 1;
  const temp = backTrack(board, i + 1, j, word, cur + 1, route, m, n)
    || backTrack(board, i - 1, j, word, cur + 1, route, m, n)
    || backTrack(board, i, j + 1, word, cur + 1, route, m, n)
    || backTrack(board, i, j - 1, word, cur + 1, route, m, n);
  route[i][j] = 0;
  return temp;
}
