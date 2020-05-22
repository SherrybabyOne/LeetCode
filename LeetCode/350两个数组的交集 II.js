/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const hashMap = new Map();
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!hashMap.has(nums1[i])) {
      hashMap.set(nums1[i], 1);
    } else {
      hashMap.set(nums1[i], hashMap.get(nums1[i]) + 1);
    }
  }
  for (let j = 0; j < nums2.length; j++) {
    const item = hashMap.get(nums2[j]);
    if (item && item > 0) {
      res.push(nums2[j]);
      hashMap.set(nums2[j], item - 1);
    }
  }
  return res;
};
