// 0-1背包问题
const knapStack = (capacity, weights, values, n) => {
  const kS = [];
  for (let i = 0; i <= n; i++) {
    kS[i] = [];
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        kS[i][w] = 0;
      } else if (weights[i - 1] <= w) {
        const a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
        const b = kS[i - 1][w];
        kS[i][w] = a > b ? a : b;
      } else {
        kS[i][w] = kS[i - 1][w];
      }
    }
  }
  return kS[n][capacity];
}

const values = [3, 4, 5],
      weights = [2, 3, 4],
      capacity = 5,
      n = values.length;
console.log(
  knapStack(capacity, weights, values, n),
)