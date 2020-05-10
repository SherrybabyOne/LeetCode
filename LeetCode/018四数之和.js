    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    var fourSum = function(nums, target) {
        const len = nums.length
        if (nums === null || len < 4) return []
        let res = []
        let l
        let r
        let sum
        nums.sort( (a, b) => a - b)
        for (let i = 0; i < len -3; i++) {
            // 去重
            if (nums[i] === nums[i - 1]) continue;
            // 优化
            if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
            if (nums[i] + nums[len -1] + nums[len -2] + nums[len -3] < target) continue
            for (let j = i + 1; j < len - 2; j++) {
                // 去重
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;
                // 优化
                if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
                if (nums[i] + nums[j] + nums[len - 1] + nums[len -2] < target) continue
                l = j + 1
                r = len - 1
                while (l < r) {
                    sum = nums[i] + nums[j] + nums[l] + nums[r]
                    if (sum < target) {
                        while (l < r && nums[l] === nums[++l]);
                    } else if (sum > target) {
                        while (l < r && nums[r] === nums[--r]);
                    } else {
                        res.push([nums[i], nums[j], nums[l], nums[r]])
                        while (l < r && nums[l] === nums[++l]);
                        while (l < r && nums[r] === nums[--r]);
                    }
                }
            }
        }
        return res
    };

    // [-2, -1, 0, 0, 1, 2]
    console.log(
        fourSum([-2, -1, 0, 0, 1, 2], 0)
    )