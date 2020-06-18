function Power(base, exponent) {
  if (base === 0 && exponent === 0) return;
  if (exponent === 0) return 1;
  let res = 1;
  if (exponent > 0) {
    while (exponent--) {
      res = res * base;
    }
  } else {
    while (exponent++) {
      res = res * base;
    }
    res = 1 / res;
  }
  return res;
}

console.log(Power(2, -3))