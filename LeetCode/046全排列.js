/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const len = nums.length;
  const output = [];
  const res = [];
  for (const item of nums) output.push(item);
  backTrack(len, res, output, 0);
  return res;
};
const backTrack = (len, res, output, cur) => {
  if (cur === len) res.push([...output]);
  for (let i = cur; i < len; i++) {
    swap(output, cur, i);
    backTrack(len, res, output, cur + 1);
    swap(output, cur, i);
  }
}
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}