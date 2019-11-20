const fn = (n) => {
  const map = {};
  const _fn = (n) => {
    if(map[n]) return map[n];
    if(n===1 || n===2) return 1;
    const prev = _fn(n - 2);
    map[n - 2] = prev;
    const next = _fn(n - 1);
    map[n - 1] = next;
    return prev + next;
  }
  return _fn(n)
}

console.log(
  fn(5)
)
// 1,1,2,3,5,8,13,21...