"use strict";
exports.__esModule = true;
var treeNode_1 = require("./treeNode");
var Tree = /** @class */ (function () {
    function Tree(data) {
        this._root = new treeNode_1.TreeNode(data);
    }
    Tree.prototype.traverseDF = function (callback) {
        var recurse;
        (recurse = function (currentNode) {
            for (var i = 0, length_1 = currentNode.children.length; i < length_1; i++) {
                recurse(currentNode.children[i]);
            }
            callback(currentNode);
        })(this._root);
    };
    Tree.prototype.traverseBF = function (callback) {
        var queue = [];
        queue.push(this._root);
        var currentTree = queue.shift();
        while (currentTree) {
            for (var i = 0, length_2 = currentTree.children.length; i < length_2; i++) {
                queue.push(currentTree.children[i]);
            }
            callback(currentTree);
            currentTree = queue.shift();
        }
        ;
    };
    Tree.prototype.contains = function (callback, travesral) {
        travesral.call(this, callback);
    };
    Tree.prototype.add = function (data, toData, traversal) {
        var child = new treeNode_1.TreeNode(data), parent = null, callback = function (node) {
            if (node.data === toData) {
                parent = node;
            }
        };
        this.contains(callback, traversal);
        if (parent) {
            parent.children.push(child);
            child.parent = parent;
        }
        else {
            throw new Error('Cannot add node to non-existing parent.');
        }
    };
    Tree.prototype.remove = function (data, fromData, traversal) {
        var tree = this, parent = null, childToRemove = null, index;
        var callback = function (node) {
            if (node.data === fromData) {
                parent = node;
            }
        };
        this.contains(callback, traversal);
        if (parent) {
            index = this.findIndex(parent.children, data);
            if (index === undefined) {
                throw new Error('Node to remove does not exist!');
            }
            else {
                childToRemove = parent.child.splice(index, 1);
            }
        }
        else {
            throw new Error('Parent does not exist!');
        }
        return childToRemove;
    };
    Tree.prototype.findIndex = function (arr, data) {
        var index;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].data === data) {
                index = i;
            }
        }
        return index;
    };
    return Tree;
}());
var tree = new Tree('one');
tree._root.children.push(new treeNode_1.TreeNode('two'));
tree._root.children[0].parent = tree._root;
tree._root.children.push(new treeNode_1.TreeNode('three'));
tree._root.children[1].parent = tree._root;
tree._root.children.push(new treeNode_1.TreeNode('four'));
tree._root.children[2].parent = tree._root;
tree._root.children[0].children.push(new treeNode_1.TreeNode('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];
tree._root.children[0].children.push(new treeNode_1.TreeNode('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];
tree._root.children[2].children.push(new treeNode_1.TreeNode('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];
console.log('***** DFS *****');
tree.traverseDF(function (node) {
    console.log(node.data);
});
console.log('***** BFS *****');
tree.traverseBF(function (node) {
    console.log(node.data);
});
console.log('***** Contains *****');
tree.contains(function (node) {
    if (node.data === 'h') {
        console.log(node);
    }
}, tree.traverseDF);
