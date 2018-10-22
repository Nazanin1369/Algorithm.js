interface LinkedListNode {
    value: string;
    next: LinkedListNode;
}

class LinkedList {
    private _head = null;

    add(val: string): LinkedListNode {
        var current,
        node = {
            value: val,
            next: null
        };

        if(this._head === null) {
            this._head = node;
        } else {
            current = this._head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }

        return node;
    }

    remove(node: LinkedListNode) {
        var current, value = node;
        if(this._head !== null) {
            if(this._head === node) {
                this._head = this._head.next;
                node.next = null;
                return value;
            }
            current = this._head;
            while(current.next) {
                if(current.next === node) {
                    current.next = node.next;
                    return value;
                }
                current = current.next;
            }
        }
    }
}