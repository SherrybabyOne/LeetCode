// 面试题30: 包含min函数的栈

class StackWithMin {
  constructor() {
    this.stack = []
    this.stackWithMin = []
  }
  push(item) {
    this.stack.push(item)
    if(this.stackWithMin.length) {
      const min_push = this.stackWithMin.pop()
      if(item <= min_push) {
        this.stackWithMin.push(min_push)
        this.stackWithMin.push(item)
      }else {
        this.stackWithMin.push(min_push)
        this.stackWithMin.push(min_push)
      }
    }else {
      this.stackWithMin.push(item)
    }
  }
  pop() {
    this.stack.pop()
    this.stackWithMin.pop()
  }
  min() {
    if(this.stackWithMin.length) {
      const min = this.stackWithMin.pop()
      this.stackWithMin.push(min)
      return min
    }else {
      return null;
    }
  }
}

const test = new StackWithMin()
test.push(3)
test.push(4)
test.push(2)
test.push(1)
test.pop()
// test.pop()
console.log(test.min())
console.log(test)