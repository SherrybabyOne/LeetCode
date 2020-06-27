function InversePairs(data) {
  if (!data) return null;
  return merge_sort(data, 0, data.length - 1, 0);
}
function merge_sort(data, l, r, count) {
  if (l >= r) return count;
  const mid = l + ((r - l) >> 1);
  count = merge_sort(data, l, mid, count);
  count = merge_sort(data, mid + 1, r, count);
  return merge(data, l, mid, r, count);
}
function merge(data, l, mid, r, count) {
  const temp = [];
  let i = l, j = mid + 1, k = 0;
  while (i <= mid && j <= r) {
    if (data[i] > data[j]) {
      temp[k++] = data[j++];
      count += mid - i + 1;
      count %= 1000000007;
      // console.log(count);
    } else {
      temp[k++] = data[i++];
    }
  }
  while (i <= mid) {
    temp[k++] = data[i++];
  }
  while (j <= r) {
    temp[k++] = data[j++];
  }
  for (k = 0, i = l; k < temp.length; k++, i++) {
    data[i] = temp[k];
  }
  return count;
}
