function GetLeastNumbers_Solution(input, k) {
  if (k === 0 || k > input.length) return []; 
  let l = 0;
  let r = input.length - 1;
  quick(input, l, r, k);
  return input.slice(0, k);
}
function quick(arr, l, r, k) {
  if (arr.length > 1) {
    const index = partition(arr, l, r);
    if (l < index - 1) {
      quick(arr, l, index - 1);
    }
    if (r > index) {
      quick(arr, index, r);
    }
  }
}
function partition(arr, l, r) {
  const pivot = arr[Math.floor((l + r) / 2)];
  while (l <= r) {
    while (pivot > arr[l]) {
      l++;
    }
    while (pivot < arr[r]) {
      r--;
    }
    if (l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  return l;
}
