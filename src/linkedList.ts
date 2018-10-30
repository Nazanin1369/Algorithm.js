export class LinkedListNode {
    value: any;
    next: LinkedListNode;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    head: LinkedListNode;
    tail: LinkedListNode;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value: any) {
        let node = new LinkedListNode(value);

        //check if list is empty
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            [this.tail, node] = [node, this.tail];
            node.next = this.tail;
            this.tail.next = null;

        }
    }

    print() {
        let currentNode = this.head;

        while(currentNode.next !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(this.tail.value);
    }

}

const myLinkedList = new LinkedList();
myLinkedList.add('1');
myLinkedList.add('2');
myLinkedList.add('3');
myLinkedList.print();

