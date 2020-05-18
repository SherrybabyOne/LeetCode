// 背包问题-分数（贪心解法）
const knapStack = (capacity, weights, values) => {
  const n = values.length;
  let load = 0;
  let val = 0;
  for (let i = 0; i < n && load < capacity; i++) {
    if (weights[i] <= capacity - load) {
      val += values[i];
      load += weights[i];
    } else {
      const r = (weights - load) / weights[i];
      val += values[i] * r;
      load += weights[i] * r;
    }
  }
  return val;
}
