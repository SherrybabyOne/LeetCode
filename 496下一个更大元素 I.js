/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    const item = nums1[i];
    for (let j = nums2.indexOf(item) + 1; j < nums2.length; j++) {
      if (nums2[j] > item) {
        res[i] = nums2[j];
        break;
      }
    }
    if (!res[i]) res[i] = -1;
  }
  return res;
};