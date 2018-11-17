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

    push(node: QueueNode) {

    }

    pop(): QueueNode {

    }
}