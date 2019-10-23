// 题目一: 数组中重复的数字
const duplicate = (nums) => {
  if(!nums) return false;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < 0 || nums[i] > nums.length - 1) return false;
  }
  for(let i = 0; i < nums.length; i++) {
    while(nums[i] !== i) {
      if(nums[i] === nums[nums[i]]) return true;
      let temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }
  return false
}

console.log(
  duplicate([1, 2, 3, 4, 5, 6, 2])
)

// 题题目二:不修改数组找出重复的数字
// 使用哈希表: 时间复杂度: O(n) 空间复杂度: O(n)
const getDuplicate1 = (nums) => {
  if(!nums) return -1;
  let hash = new Map();
  for(let i = 0; i < nums.length; i++) {
    if(!hash.has(nums[i])) {
      hash.set(nums[i], 0);
    }else {
      return nums[i];
    }
  }
}
console.log(getDuplicate1([1, 2, 1, 3]))

// 优化解法:类似于二分法
// 时间复杂度: O(nlogn) 空间复杂度: O(1)， 牺牲时间优化空间
const getDuplicate2 = (nums) => {
  if(!nums) return -1;
  let start = 1;
  // n
  let end = nums.length - 1;
  while(end >= start) {
    let middle = ((end - start) >> 1) + start;
    let count = countRange(nums, start, middle);
    if(end === start) {
      if(count > 1) return start;
      break;
    }
    if(count > (middle - start + 1)) {
      end = middle;
    }else {
      start = middle + 1;
    }
  }
  return -1;
}
const countRange = (nums, start, end) => {
  if(!nums) return 0;
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] >= start && nums[i] <= end) {
      count++;
    }
  }
  return count;
}
console.log(
  getDuplicate2([1, 2, 3, 4, 5, 2])
)