'use strict';

function createNode(value) {
    return {
        value,
        next: null
    }
}

function createLinkedlist() {
    return {
        head: null,
        tail: null,
        length: 0,
        push(value) {
            let node = createNode(value);

            if(this.head === null) {
                this.head = node;
                this.tail = node;
                this.length++;
                return node;
            }

            this.tail.next = node;
            this.tail = node;
            return node;
        },
        pop() {
            if(this.isEmpty()) {
                return null;
            }

            const node  = this.tail;

            if(this.head === this.tail) {
                this.head = null;
                this.tail = null;
                this.length--;
                return node;
            }

            let current = this.head;
            let penultimate;

            while(current) {
                if(current.next === this.tail) {
                    penultimate = current;
                    break;
                }
                current = current.next;
            }

            penultimate.next = null;
            this.tail = penultimate;
            this.length--;

            return node;

        },
        get(index) {
            if(index < 0 || index > this.length - 1) {
                return null;
            }

            if(index === 0) {
                return this.head;
            }

            let current = this.head;
            for(let i = 0; i < index; i++ ) {
                current = current.next;
            }

            return current;

        },
        delete(index) {
            if(index < 0 || index > this.length - 1) {
                return null;
            }

            if(index === 0) {
                let temp = this.head;
                this.head = temp.next;
                temp.next = null;
                return temp;
            }

            let current = this.head;
            let penultimate;
            for(let i = 0; i < index; i++ ) {
                penultimate = current;
                current = current.next;
            }

            penultimate.next = current.next;
            current.next = null;

            if(penultimate.next === null) {
                this.tail = penultimate;
            }

            this.length--;

            return current;

        },
        isEmpty() {
            return this.length === 0;
        },
        print() {
            const values = [];
            let current = this.head;

            while(current) {
                values.push(current.value);
                current = current.next;
            }

            return values.join(' => ');
        }
    }
}

const list = createLinkedlist();
const values = ['a', 'b', 'c', 'd', 'e'];
const nodes = values.map(val => list.push(val));

console.log(list.print())