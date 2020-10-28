/**
 * @param {number[]} prices
 * @return {number}
 */
// 方法一：暴力法
var maxProfit = function(prices) {
  return calculate(prices, 0);
};
function calculate(prices, s) {
  if (s >= prices.length) return 0;
  let max = 0;
  for (let i = s; i < prices.length; i++) {
    let maxProfit = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        maxProfit = Math.max(
          calculate(prices, j + 1) + prices[j] - prices[i],
          maxProfit,
        );
      }
    }
    max = Math.max(max, maxProfit);
  }
  return max;
}

// 方法二：一次遍历
var maxProfit = function(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {
      maxProfit += prices[i + 1] - prices[i];
    }
  }
  return maxProfit;
};
