class Stack {
    constructor () {
        this.stack = [];
    }
    push (item) {
        return this.stack.push(item);
    }
    pop () {
        return this.stack.pop();
    }
    getCount () {
        return this.stack.length;
    }
    peek () {
        return this.stack[this.getCount() - 1];
    }
    isEmpty () {
        return this.stack.length === 0;
    }
}

const stack = new Stack()
console.log(
    stack,
    stack.push('a'),
    stack.push('b'),
    stack
)