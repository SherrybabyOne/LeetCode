class Stack {
    constructor (...items) {
        this.data = [...items];
    }
    push (...items) {
        return this.data.push(...items)
    }
    pop () {
        return this.data.pop();
    }
}

const stack = new Stack(1,2,3)
console.log(
    stack,
    stack.push(5),
    stack,
    stack.pop()
)