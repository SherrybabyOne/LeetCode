function IsContinuous(numbers) {
  if (!numbers || numbers.length === 0) {
    return false;
  }
  const hash = new Map();
  let min = 14;
  let max = 0;
  for (const item of numbers) {
    if (item > 0) {
      if (hash.has(item)) return false;
      hash.set(item, 1);
      min = Math.min(item, min);
      max = Math.max(item, max);
    }
  }
  return max - min < 5;
}