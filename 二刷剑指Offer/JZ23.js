function VerifySquenceOfBST(sequence) {
  if (sequence == null || sequence.length === 0) {
    return false;
  }
  return isBST(sequence, 0, sequence.length - 1);
}
function isBST(seq, start, end) {
  if (start >= end) return true;
  const val = seq[end];
  let split = start;
  for (; split < end && seq[split] < val; split++);
  for (let i = split; i < end; i++) {
    if (seq[i] < val) return false;
  }
  return isBST(seq, start, split - 1) && isBST(seq, split, end - 1);
}