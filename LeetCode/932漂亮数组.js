/**
 * @param {number} N
 * @return {number[]}
 */
var beautifulArray = function(N) {
  const hash = new Map();
  const fn = N => {
    if (hash.has(N)) {
      return hash.get(N);
    }
    const ans = [];
    if (N === 1) {
      ans[0] = 1;
    } else {
      let t = 0;
      for (const x of fn(Math.floor((N + 1) / 2))) { // odd
        ans[t++] = 2 * x - 1;
      }
      for (const x of fn(Math.floor(N / 2))) { // evens
        ans[t++] = 2 * x;
      }
    }
    hash.set(N, ans);
    return ans;
  }
  return fn(N);
};

console.log(
  beautifulArray(12)
)