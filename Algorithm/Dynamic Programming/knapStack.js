// 0-1背包问题
// 给定一个固定大小、能够携重量W的背包，以及一组有价值和重量的物品
// 找一个最佳解决方案，使得装入背包的物品不超过W，且总价值最大
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
  findValues(n, capacity, kS, weights, values);
  return kS[n][capacity];
}

const findValues = (n, capacity, kS, weights, values) => {
  let k = capacity;
  console.log('构成解的物品:')
  while (n > 0 && k > 0) {
    if (kS[n][k] !== kS[n - 1][k]) {
      console.log(`物品${n}是可解的一部分 w,v: ${weights[n - 1]}, ${values[n - 1]}}`);
      n--;
      k -= weights[n - 1];
    } else {
      n--;
    }
  }
}

const values = [3, 4, 5],
      weights = [2, 3, 4],
      capacity = 5,
      n = values.length;
console.log(
  knapStack(capacity, weights, values, n),
);
