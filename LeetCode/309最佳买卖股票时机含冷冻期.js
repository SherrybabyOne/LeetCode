/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0;
  const len = prices.length;
  const f = new Array(len);
  for (let i = 0; i < len; i++) f[i] = new Array(3).fill(0);
  f[0][0] = -prices[0];
  for (let i = 1; i < len;i ++) {
    f[i][0] = Math.max(f[i - 1][0], f[i - 1][2] - prices[i]);
    f[i][1] = f[i - 1][0] + prices[i];
    f[i][2] = Math.max(f[i - 1][1], f[i - 1][2]);
  }
  return Math.max(f[len - 1][1], f[len - 1][2]);
};