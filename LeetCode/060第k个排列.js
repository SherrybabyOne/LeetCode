/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// var getPermutation = function(n, k) {
//   const nums = [];
//   for (let i = 1; i <= n; i++) nums.push(i);
//   const perm = [];
//   const vis = [];
//   let count = 0;
//   const backTrack = cur => {
//     if (cur === nums.length) {
//       count++;
//       if (count === k) {
//         return perm.join('');
//       }
//       return;
//     }
//     for (let i = 0; i < nums.length; i++) {
//       if (vis[i]) continue;
//       perm.push(nums[i]);
//       vis[i] = 1;
//       const ans = backTrack(cur + 1);
//       if (ans) return ans;
//       perm.pop();
//       vis[i] = 0;
//     }
//   }
//   return backTrack(0);
// };
const getPermutation = (n, k) => {
  const factorial = [1];
  for (let i = 1; i < n; i++) factorial[i] = factorial[i - 1] * i;
  let ans = '';
  const valid = [];
  for (let i = 1; i <= n; i++) valid.push(i);
  k--;
  for (let i = 1; i <= n; i++) {
    const order = Math.floor(k / factorial[n - i]) + 1;
    ans += valid[order - 1];
    valid.splice(order - 1, 1);
    k %= factorial[n - i];
  }
  return ans;
}