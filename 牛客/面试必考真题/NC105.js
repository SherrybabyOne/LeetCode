/**
 * 二分查找
 * @param n int整型 数组长度
 * @param v int整型 查找值
 * @param a int整型一维数组 有序数组
 * @return int整型
 */
function upper_bound_( n ,  v ,  a ) {
  let l = 0;
  let r = n - 1;
  let index;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const midVal = a[mid];
    if (midVal >= v) {
      if (mid === 0 || a[mid - 1] < v) return mid + 1;
      else r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return n + 1;
}
module.exports = {
  upper_bound_ : upper_bound_
};