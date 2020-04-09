/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const G = [];
  G[0] = 0;
  G[1] = 1;
  for (let i = 2; i <= n; i++) {
    G[i] = 0;
    for (let j = 1; j < i; j++) {
      G[n] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
};
