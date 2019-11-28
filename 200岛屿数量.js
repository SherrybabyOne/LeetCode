/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if(!grid.length) return 0;
  const height = grid.length;
  const width = grid[0].length;
  for(let i = 0; i < height; i++) {
      for(let j = 0; j < width; j++) {
          grid[i][j] = parseInt(grid[i][j]);
      }
  }
  let res = 0;
  for(let i = 0; i < height; i++) {
      for(let j = 0; j < width; j++) {
          if(grid[i][j] == 1) {
              res += 1;
              visitLand(i, j, grid, width, height);
          }
      }
  }
  return res;
};
function visitLand(x, y, arr, width, height) {
  if(x==height || y==width || x==-1 || y==-1 || arr[x][y]==0) return;
  arr[x][y] = 0;
  visitLand(x-1, y, arr, width, height);
  visitLand(x+1, y, arr, width, height);
  visitLand(x, y-1, arr, width, height);
  visitLand(x, y+1, arr, width, height);
}