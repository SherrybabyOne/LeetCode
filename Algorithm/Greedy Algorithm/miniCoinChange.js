// 最少硬币找零问题（贪心解法）
// 比动态规划更简单、更快。然而，并不总是得到最优解
const miniCoinChange = (coins, amount) => {
  const change = [];
  let total = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i];
    while (total + coin <= amount) {
      change.push(coin);
      total += coin;
    }
  }
  return change;
}
