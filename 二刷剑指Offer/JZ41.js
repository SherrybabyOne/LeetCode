// 前缀和
// O(n * n)
function FindContinuousSequence(sum) {
	const res = [];
	let temp = 0;
	for (let i = 1; i < sum / 2; i++) {
		for (let j = i; j < sum; j++) {
			temp += j;
			if (temp === sum) {
				const ans = [];
				for (let k = i; k <= j; k++) {
					ans.push(k);
				}
				res.push(ans);
			} else if (temp > sum) {
				temp = 0;
				break;
			}
		}
	}
	return res;
}
// 滑动窗口
// O(n)
function FindContinuousSequence(sum) {
	let l = r = 1;
	let temp = 0;
	const res = [];
	while (l <= sum / 2) {
		if (temp < sum) {
			temp += r;
			r++;
		} else if (temp > sum) {
			temp -= l;
			l++;
		} else {
			const ans = [];
			for (let i = l; i < r; i++) {
				ans.push(i);
			}
			res.push(ans);
			temp -= l;
			l++;
		}
	}
	return res;
}