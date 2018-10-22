class Tree {
    _root:TreeNode;

    constructor(data) {
        this._root = new TreeNode(data);
    }

    traverseDF(callback: Function): void {
        let recurse;
        (recurse = currentNode => {
            for(let i = 0, length = currentNode.children.length; i < length; i++) {
                recurse(currentNode.children[i]);
            }
            callback(currentNode);
        })(this._root);
    }

    traverseBF(callback: Function): void {
        let queue = [];
        queue.push(this._root);

        let currentTree = queue.shift();

        while(currentTree) {
            for (let i = 0, length = currentTree.children.length; i <length; i++ ) {
                queue.push(currentTree.children[i]);
            }
            callback(currentTree);
            currentTree = queue.shift();
        };
    }

    contains(callback: Function, travesral): void {
        travesral.call(this, callback);
    }

    add(data: string, toData:string, traversal) {
        let child = new TreeNode(data),
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
    }

    remove(data: string, fromData: string, traversal): TreeNode {
        let tree = this,
            parent = null,
            childToRemove = null,
            index;

        const callback = function(node) {
            if(node.data === fromData) {
                parent = node;
            }
        };

        this.contains(callback, traversal);

        if(parent) {
            index = this.findIndex(parent.children, data);

            if(index === undefined) {
                throw new Error('Node to remove does not exist!');
            } else {
                childToRemove = parent.child.splice(index, 1);
            }
        } else {
            throw new Error('Parent does not exist!');
        }

        return childToRemove;
    }

    findIndex(arr: Array<any>, data: string): number {
        let index;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].data === data) {
                index = i;
            }
        }
        return index;
     }
}


let tree = new Tree('one');

tree._root.children.push(new TreeNode('two'));
tree._root.children[0].parent = tree._root;

tree._root.children.push(new TreeNode('three'));
tree._root.children[1].parent = tree._root;

tree._root.children.push(new TreeNode('four'));
tree._root.children[2].parent = tree._root;

tree._root.children[0].children.push(new TreeNode('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new TreeNode('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new TreeNode('seven'));
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
}, tree.traverseDF);
