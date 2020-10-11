/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0 || prices.length === 1) return 0;
  let min = prices[0];
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] >= min) res = Math.max(prices[i] - min, res);
    else min = prices[i];
  }
  return res;
};