// knapSack
// 最少硬币找零问题
const miniCoinChange = (coins, amount) => {
  const cache = [];
  const makeChange = value => {
    if (!value) return [];
    if (cache[value]) return cache[value];
    let min = [];
    let newMin;
    let newAmount;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = value - coin;
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }
      if (
        newAmount >= 0 &&
        (newMin.length + 1 < min.length || !min.length) &&
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
  kanpSack([1, 5, 10, 25], 36),
)
