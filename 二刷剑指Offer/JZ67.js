function cutRope(number) {
  if (number === 2) {
    return 1;
  } else if (number === 3) {
    return 2;
  }
  const mark = new Array(number + 1).fill(-1);
  return backTrack(number, mark);
}
function backTrack(n, mark) {
  if (n <= 4) {
    return n;
  }
  if (mark[n] !== -1) {
    return mark[n];
  }
  let ret = 0;
  for (let i = 1; i < n; i++) {
    ret = Math.max(ret, i * backTrack(n - i, mark));
  }
  return mark[n] = ret;
}
