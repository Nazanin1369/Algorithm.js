export class DoublyLinkedListNode {
    value: any;
    next: DoublyLinkedListNode;
    prev: DoublyLinkedListNode;

    constructor(value: any) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class DoublyLinkedList {
    head: DoublyLinkedListNode;
    tail: DoublyLinkedListNode;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value: any) {
        let node = new DoublyLinkedListNode(value);

        //check if list is empty
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            console.log(this.tail);
            [this.tail, node] = [node, this.tail];
            node.next = this.tail;
            this.tail.prev = node;
            console.log(this.tail)
            this.tail.next = null;

        }
    }

    remove(value: any) {
       let prevNode = this.head;
       let currentNode = this.head;

       do {
           if(currentNode.value === value) {
               if(this.head === currentNode) {
                   // it is head
                   this.head = currentNode.next;
                   break;
               } else if (currentNode.next === null) {
                   // it is the last node
                   prevNode.next = null;
                   this.tail = prevNode;
                   break;
               } else {
                   // it is in the middle
                   prevNode.next = currentNode.next;
                   break;
               }
           } else {
            prevNode = currentNode;
           }
       } while(currentNode.next !== null, currentNode = currentNode.next)
    }

    print() {
        let currentNode = this.head;

        do {
            console.log(currentNode.value);
        } while(currentNode.next !== null, currentNode = currentNode.next);
    }

}

const myLinkedList = new DoublyLinkedList();
myLinkedList.add('1');
myLinkedList.add('2');
myLinkedList.print();
// myLinkedList.add('2');
// myLinkedList.add('3');
// myLinkedList.add('4');
// myLinkedList.print();
// console.log('--------------');
// myLinkedList.remove('3');
// myLinkedList.print();
// console.log('--------------');

