/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  if(m > n) {
    [nums1, nums2] = [nums2, nums1];
    [m, n] = [n, m];
  }
  
  let iMin = 0;
  let iMax = m;
  let halfLen = Math.floor((m + n + 1) / 2);
  while(iMin <= iMax) {
    let i = Math.floor((iMin + iMax) / 2);
    let j = Math.floor(halfLen - i);
    if(i < iMax && nums2[j - 1] > nums1[i]) {
      // i太小
      iMin = i + 1;
    }else if(i > iMin && nums1[i - 1] > nums2[j]) {
      // i太大
      iMax = i - 1;
    }else {
      let maxLeft = 0;
      if(i === 0) { maxLeft = nums2[j - 1]; }
      else if (j === 0) { maxLeft = nums1[i - 1]; }
      else { maxLeft = Math.max(nums1[i - 1], nums2[j - 1]) }

      if( (m + n) % 2 === 1) return maxLeft;

      let minRight = 0;
      if(i === m) { minRight = nums2[j]; }
      else if(j === n) { minRight = nums1[i]; }
      else { minRight = Math.min(nums2[j], nums1[i]); }

      return (maxLeft + minRight) / 2;
    }
  }
  return 0;
};