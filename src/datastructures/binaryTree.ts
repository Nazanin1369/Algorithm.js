export class BinaryNode {
    value: string|number;
    left: BinaryNode;
    right: BinaryNode;

    constructor(value: string|number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Maximum number of nodes in a binary tree of height ‘h’ is 2h – 1
export class BinaryTree {
    root: BinaryNode;

    constructor() {
        this.root = null;
    }

    insert(value): void {

        const newNode = new BinaryNode(value);
        if(this.root === null) {
            console.log('insert root: ', value)
            this.root = newNode
            return;
        }

        this.levelOrderTraversal( node => {
            //console.log('left: ', node.left)
            //console.log('right: ', node.right)
            console.log(node)

            if(node.left === null) {
                console.log('insert in left', node.value)
                node.left = newNode;
                return;
            }

            if(node.right === null) {
                console.log('insert in right', node.value)
                node.right = newNode;
                return;
            }
        }, this.root);
    }

    inOrderTraversal(action, node: BinaryNode): void {
        if(node === null) {
            return;
        }

        this.inOrderTraversal(action, node.left);
        action.call(this, node);
        this.inOrderTraversal(action, node.right);

    }

    preOrderTraversal(action, node: BinaryNode): void {
        if(node === null) {
            return;
        }

        action.call(this, node);
        this.inOrderTraversal(action, node.left);
        this.inOrderTraversal(action, node.right);
    }

    postOrderTraversal(action, node: BinaryNode): void {
        if(node === null) {
            return;
        }

        this.inOrderTraversal(action, node.left);
        this.inOrderTraversal(action, node.right);
        action.call(this, node);
    }

    levelOrderTraversal(action, root: BinaryNode): void {
        const treeHeight = this.getHeight(this.root);
        console.log('height is:', treeHeight)
        for(let h = 1; h <= treeHeight; h++) {
            this.getLevels(root, h, action);
        }
    }

    getLevels(node: BinaryNode, level: number, action): void {
        if(node === null) {
            return;
        }

        if(level === 1) {
            //console.log(node.value);
            console.log('**')
            action.call(this, node);
        }

        if(level > 1) {
            this.getLevels(node.left, level - 1, action);
            this.getLevels(node.right, level - 1, action);
        }
    }

    print(): void {
        this.postOrderTraversal((node) => {
            console.log('-', node.value)
        }, this.root);
    }

    getHeight(node: BinaryNode): number {
        if(node === null) {
            return 0;
        } else {
            // Compute the height of each subtree

            let lHeight = this.getHeight(node.left);
            let rHeight = this.getHeight(node.right);

            // Use the larger one 
            if(lHeight > rHeight) {
                return (lHeight + 1);
            } else {
                return (rHeight + 1);
            }
        }
    }

    // A Binary Tree is full if every node has 0 or 2 children.
    //  L = I + 1
    isFull(): boolean {
        return false;
    }

    // A Binary Tree is complete Binary Tree if all levels are completely filled except possibly the last level and the last level has all keys as left as possible
    isComplete(): boolean {
        return false;
    }

    // A Binary tree is Perfect Binary Tree in which all internal nodes have two children and all leaves are at the same level.
    // #Nodes = 2h – 1
    isPerfect() {

    }

    // h = O(log(n))
    // AVL and RB Trees are balanced
    isBalanced(): boolean {
        return false;
    }
}

let binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);

//binaryTree.print();