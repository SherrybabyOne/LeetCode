// knapSack
// 最少硬币找零问题
const kanpSack = (coins, amount) => {
  // 记忆化
  const cache = [];
  const makeChange = value => {
    if (!value) return [];
    if (cache[value]) return cache[value];
    let min = [];
    let newMin;
    let newAmount;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = value - coins[i];
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }
      if (newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
      }
    }
    cache[value] = min;
    return cache[value];
  }
  return makeChange(amount);
}

console.log(
  kanpSack([1, 5, 10, 25], 36)
)
