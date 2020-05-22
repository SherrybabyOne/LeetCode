/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  let count = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let k = i + 2;
    for (let j = i + 1; j < nums.length - 1; j++) {
      k = binarySearch(nums, j + 1, nums.length - 1,nums[i] + nums[j]);
      console.log(i, j, k);
      count += k - j - 1;
    }
  }
  return count;
};
const binarySearch = (arr, l, r, max) => {
  while (l <= r && r < arr.length) {
    const mid = Math.floor((l + r) / 2);
    const pivot = arr[mid];
    if (pivot < max) {
      l = mid + 1;
    } else if (pivot >= max) {
      r = mid - 1;
    }
  }
  return l;
}
