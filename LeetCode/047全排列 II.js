var permuteUnique = function(nums) {
  const len = nums.length;
  const ans = [];
  const vis = new Array(len);
  nums.sort((a, b) => a - b);
  const perm = [];
  backTrack(ans, vis, 0, nums, perm);
  return ans;
};
const backTrack = (ans, vis, cur, nums, perm) => {
  if (cur === nums.length) {
    ans.push([...perm]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
      continue;
    }
    perm.push(nums[i]);
    vis[i] = 1;
    backTrack(ans, vis, cur + 1, nums, perm);
    perm.pop();
    vis[i] = 0;
  }
}