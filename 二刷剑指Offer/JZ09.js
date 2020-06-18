function jumpFloorII(number) {
  if (number <= 2) return number;
  const dp = [1, 1, 2];
  for (let i = 3; i <= number; i++) {
    dp[i] = 0;
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j];
    }
  }
  return dp[number];
}

function jumpFloorII(number) {
  if (number <= 2) return number;
  let a = 2;
  for (let i = 3; i <= number; i++) {
    a = a << 1;
  }
  return a;
}
