function LeftRotateString(str, n) {
  if (!str || str.length === 0) {
    return '';
  }
  n = n % str.length;
  return str.slice(n) + str.slice(0, n);
}