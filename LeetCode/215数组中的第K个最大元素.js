/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
	if (!nums) return null;
	const res = quickSelect(nums, 0, nums.length - 1, nums.length - k);
	return res;
};
const quickSelect = (nums, start, end, index) => {
	const i = partition(nums, start, end);
	if (i === index) {
		return nums[index];
	} else if (i > index) {
		return quickSelect(nums, start, i - 1, index);
	} else {
		return quickSelect(nums, i + 1, end, index);
	}
}
const partition = (nums, l, r) => {
	const pivot = nums[l];
	let j = l;
	for (let i = l + 1; i <= r; i++) {
		if (nums[i] < pivot) {
			j++;
			[nums[j], nums[i]] = [nums[i], nums[j]];
		}
	}
	[nums[j], nums[l]] = [nums[l], nums[j]];
	return j;
}
