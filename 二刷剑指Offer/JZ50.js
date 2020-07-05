function duplicate(numbers, duplication) {
  if (!numbers) return false;
  if (numbers.length === 1) return false;
  const hash = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (hash.has(numbers[i])) {
      duplication[0] = numbers[i];
      return true;
    } else {
      hash.set(numbers[i], 1);
    }
  }
  return false;
}