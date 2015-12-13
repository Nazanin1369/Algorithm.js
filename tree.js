function findIndex(arr, data) {
	var index;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i].data === data) {
			index = i;
		}
	}
	return index;
 }

/**
 * Node class
 **/
function Node(data) {
	this.children = [];
	this.parent = null;
	this.data = data;
}

/**
 * Tree constructor
 **/
function Tree(data) {
	var node = new Node(data);
	this._root = node;
}

Tree.prototype.traverseDF = function(callback) {
	(function recurse(currentNode) {
		for(var i = 0, length = currentNode.children.length; i < length; i++) {
			recurse(currentNode.children[i]);
		}
		callback(currentNode);
	})(this._root);
};

Tree.prototype.traverseBF = function(callback) {
	var queue = [];
	queue.push(this._root);
	var currentTree = queue.shift();
	while(currentTree) {
		for (var i = 0, length = currentTree.children.length; i <length; i++ ) {
			queue.push(currentTree.children[i]);
		}
		callback(currentTree);
		currentTree = queue.shift();
	};
};

Tree.prototype.contains = function(callback, travesral) {
	travesral.call(this, callback);
};

Tree.prototype.add = function(data, toData, traversal) {
	var child = new Node(data),
		parent = null,
		callback = function(node) {
			if(node.data ===  toData) {
				parent = node;
			}
		};

		this.contains(callback, traversal);

		if(parent) {
			parent.children.push(child);
			child.parent = parent;
		} else {
			throw new Error('Cannot add node to non-existing parent.')
		}
};

Tree.prototype.remove = function(data, fromData, traversal) {
	var tree = this,
		parent = null,
		childToRemove = null,
		index;

	var callback = function(node) {
		if(node.data === fromData) {
			parent = node;
		}
	};

	this.contains(callback, traversal);

	if(parent) {
		index = findIndex(parent.children, data);

		if(index === undefined) {
			throw new Error('Node to remove does not exist!');
		} else {
			childToRemove = parent.child.splice(index, 1);
		}
	} else {
		throw new Error('Parent does not exist!');
	}

	return childToRemove;
};

var tree = new Tree('one');

tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

console.log('***** DFS *****');
tree.traverseDF(function(node){
	console.log(node.data);
});

console.log('***** BFS *****');
tree.traverseBF(function(node){
	console.log(node.data);
});

console.log('***** Contains *****');
tree.contains(function(node) {
	if(node.data === 'h') {
		console.log(node);
	}
}, tree.traverseDF)