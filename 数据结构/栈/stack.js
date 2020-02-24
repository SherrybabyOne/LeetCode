// 先进后出，后进先出
class Stack {
    constructor() {
        this.stack = [];
    }
    push(...iterms) {
        this.stack.push(...iterms);
    }
    pop() {
        return this.isEmpty() ? undefined : this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        this.stack = [];
    }
    size() {
        return this.stack.length;
    }
}


function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let res = '';
    while (number > 0) {
        remStack.push(number % 2);
        number = Math.floor(number / 2);
    }
    while (!remStack.isEmpty()) {
        res += remStack.pop().toString();
    }
    return res;
}

function baseConverter(decNumber, base) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    let number = decNumber;
    while (number > 0) {
        remStack.push(number % base);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {
        res += digits[remStack.pop()];
    }
    return res;
}

console.log(decimalToBinary(233));
console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));