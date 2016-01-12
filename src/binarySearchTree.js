function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    return this;
}

Node.prototype.insert = function(newNode) {
    if(newNode.value < this.value) {
        if(this.left === null) {
            this.left = newNode;
        } else {
            this.left.insert(newNode);
        }

    } else if(newNode.value > this.value) {
        if(this.right === null) {
            this.right = newNode;
        } else {
            this.right.insert(newNode);
        }
    } else {
        return true;
    }
}

Node.prototype.DFS = function(searchValue, callback) {
    if(this.value === searchValue) {
        callback(this);
        return true;
    } else if(searchValue < this.value && this.left !== null) {
        return this.left.DFS(searchValue, callback);
    } else if(searchValue > this.value && this.right !== null) {
        return this.right.DFS(searchValue, callback);
    } else {
        callback(null);
        return false;
    }
}

Node.prototype.inOrderTraversal = function(callback) {
    if(this.left !== null ) {
        this.left.inOrderTraversal(callback);
    }
    callback(this.value);
    if(this.right !== null) {
        this.right.inOrderTraversal(callback);
    }
};

Node.prototype.preOrderTraversal = function(callback) {
    if(this.left !== null ) {
        this.left.preOrderTraversal(callback);
    }
    callback(this.value);
    if(this.right !== null) {
        this.right.preOrderTraversal(callback);
    }
};

Node.prototype.postOrderTraversal = function(callback) {
    if(this.left !== null ) {
        this.left.postOrderTraversal(callback);
    }
    callback(this.value);
    if(this.right !== null) {
        this.right.postOrderTraversal(callback);
    }
};



function BinarySearchTree(insertNode) {
    if(insertNode instanceof Node) {
        this._root = insertNode;
    } else {
        this._root = new Node(insertNode);
    }
    return this;
};

BinarySearchTree.prototype.insert = function(node) {
    if(node instanceof Node) {
        this._root.insert(node);
    } else {
        this._root.insert(new Node(node));
    }
};

BinarySearchTree.prototype.DFS = function(searchValue, callback) {
    this._root.DFS(searchValue, callback);
};

BinarySearchTree.prototype.inOrderTraversal = function(callback) {
    this._root.inOrderTraversal(callback);
};

BinarySearchTree.prototype.preOrderTraversal = function(callback) {
    this._root.preOrderTraversal(callback);
};

BinarySearchTree.prototype.postOrderTraversal = function(callback) {
    this._root.postOrderTraversal(callback);
};

(function() {
   var bst = new BinarySearchTree(30);

   bst.insert(39);
   bst.insert(90);
   bst.insert(11);
   bst.insert(70);

   bst.postOrderTraversal(function(node) {
       console.log(node)
   });

   bst.preOrderTraversal(function(node) {
       console.log(node)
   });

   bst.inOrderTraversal(function(node) {
       console.log(node)
   });

   bst.DFS(11, function(node) {
       console.log(node)
   });
}());