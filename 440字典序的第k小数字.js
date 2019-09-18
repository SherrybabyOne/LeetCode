/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
  let getCount = (prefix, n) => {
    let count =  0;
    for(let cur = prefix, next = prefix + 1; cur <= n; cur *= 10, next *= 10) 
      count += Math.min(next, n+1) - cur;
    return count;
  }
  let p = 1;
  let prefix = 1;
  while(p < k) {
    let count = getCount(prefix, n);
    if(p + count > k) {
      prefix *= 10;
      p++;
    } else if(p + count <= k) {
      prefix ++;
      p += count;
    }
  }
  return prefix;
};