/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 获取n的纬度
    let vector = matrix.length;
    for(let i = 0,len=vector/2; i < len; i++) {
        for(let j = 0; j < vector; j++) {
            [matrix[i][j],matrix[vector-i-1][j]] = [matrix[vector-i-1][j],matrix[i][j]]
        }
    }
    // 对角线翻转
    for(let i = 0; i < vector; i++) {
        for(let j = 0; j < i; j++) {
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]];
        }
    }
    return matrix
};