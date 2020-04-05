/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.size = k;
  nums.sort((a, b) => a - b);
  if (nums.length <= this.size) {
    this.heap = nums;
  } else {
    this.heap = nums.slice(nums.length - k);
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.heap.length < this.size) {
    this.heap.push(val);
    this.heap.sort((a, b) => a - b);
  } else {
    if (val > this.heap[0]) {
      this.heap.push(val);
      this.heap.sort((a, b) => a - b);
      this.heap = this.heap.slice(1);
    }
  }
  return this.heap[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */