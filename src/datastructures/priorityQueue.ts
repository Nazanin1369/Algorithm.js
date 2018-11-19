export class QueueNode {
    value: string;
    priority: number;

    constructor(value, priority=0) {
        this.value = value;
        this.priority = priority;
    }
}

export class PriorityQueue {
    queue: Array<QueueNode>;

    constructor() {
        this.queue = [];
    }

    push(value: string, priority: number) {
        this.queue.push(
            new QueueNode(value, priority)
        );
    }

    pop(): QueueNode|string {
        let max = -Infinity;
        let candidate = undefined;

        if(this.queue.length === 0) {
            return 'No item in the queue to return';
        }

        for(let node of this.queue) {
            if(node.priority > max) {
                candidate = node;
                max = node.priority;
            }
        }

        return candidate;
    }

    size(): number {
        return this.queue.length;
    }
}

let priorityQueue = new PriorityQueue();

priorityQueue.push('one', 1);
priorityQueue.push('one hundred', 100);
priorityQueue.push('two', 2);
priorityQueue.push('three', 3);

console.log(priorityQueue.pop())