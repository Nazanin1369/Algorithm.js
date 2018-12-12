function createQueue() {
    const queue = [];

    return {
        enqueue(item) {
            queue.unshift(item)
        },
        dequeue() {
            return queue.pop()
        },
        peek() {
            return queue[queue.length - 1]
        },
        get length() {
            return queue.length
        },
        isEmpty() {
            return queue.length === 0
        }
    }
}

const q = createQueue();

console.log(q.isEmpty());

q.enqueue('This is the first task');
q.enqueue('This is the second task');
q.enqueue('This is the third task');

console.log(q.dequeue());
console.log(q.peek());