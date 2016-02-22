function LinkedList() {
    this._head = null;
    this._current = null;
}

LinkedList.prototype.add = function(val) {
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

LinkedList.prototype.remove = function(node) {
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