function createStack() {
    const stack = [];

    return  {
        push(item) {
            stack.push(item);
        },
        pop() {
            return stack.pop();
        },
        get length() {
            return stack.length;
        },
        isEmpty() {
            return stack.length === 0;
        }
    }
}

const stack = createStack();
console.log(stack.isEmpty());

stack.push('Book 1');
stack.push('Book 2');

console.log(stack.pop());
console.log(stack.pop());

exports.createStack = createStack;


