class Deque {
  constructor() {
      this.queue = [];
  }

  addFront(...iterms) {
    return this.queue.unshift(...iterms);
  }
  addBack(...iterms) {
    return this.queue.push(...iterms);
  }
  removeFront() {
    return this.isEmpty() ? undefined : this.queue.shift();
  }
  removeBack() {
    return this.isEmpty() ? undefined : this.queue.pop();
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.queue = [];
  }
  size() {
    return this.queue.length;
  }
}

function palindromeChecker(aString) {
  if (!aString) return false;
  const deque = new Deque();
  let isEqual = true;
  let firstChar, lastChar;

  for (let i = 0; i < aString.length; i++) {
    deque.addBack(aString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }
  return isEqual;
}

console.log(palindromeChecker('a'))
console.log(palindromeChecker('aa'))
console.log(palindromeChecker('keyak'))
console.log(palindromeChecker('level'))