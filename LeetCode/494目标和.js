/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// 方法一：枚举
var findTargetSumWays = function(nums, S) {
  if (!nums || nums.length === 0) return 0;
  const len = nums.length;
  const fn = (curIndex, curNum, nums, len, S) => {
    if (curIndex === len) {
      if (curNum === S) res++;
      return;
    }
    fn(curIndex + 1, curNum + nums[curIndex], nums, len, S);
    fn(curIndex + 1, curNum - nums[curIndex], nums, len, S);
  }
  let res = 0;
  fn(0, 0, nums, len, S);
  return res;
};

// 方法二：动态规划
var findTargetSumWays = function(nums, S) {
  if (!nums || nums.length === 0) return 0;
  const len = nums.length;
  let sum = 0;
  for (let i = 0; i < len; i++) sum += nums[i];
  const dp = new Array(len);
  for (let i = 0; i < len; i++) dp[i] = new Array(sum * 2 + 1).fill(0);

  dp[0][nums[0] + sum] = 1;
  dp[0][-nums[0] + sum] += 1;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= sum * 2; j++) {
      if (dp[i - 1][j] > 0) {
        dp[i][j + nums[i]] += dp[i - 1][j];
        dp[i][j - nums[i]] += dp[i - 1][j];
      }
    }
  }
  return dp[len - 1][S + sum] || 0;
};

// 方法三：动态规划（空间优化）
var findTargetSumWays = function(nums, S) {
  if (!nums || nums.length === 0) return 0;
  const len = nums.length;
  let sum = 0;
  for (let i = 0; i < len; i++) sum += nums[i];
  let dp = new Array(sum * 2 + 1).fill(0);

  dp[nums[0] + sum] = 1;
  dp[-nums[0] + sum] += 1;
  for (let i = 1; i < len; i++) {
    const dpNext = new Array(sum * 2 + 1).fill(0);
    for (let j = 0; j <= sum * 2; j++) {
      if (dp[j] > 0) {
        dpNext[j + nums[i]] += dp[j];
        dpNext[j - nums[i]] += dp[j];
      }
    }
    dp = dpNext;
  }
  return dp[S + sum] || 0;
};