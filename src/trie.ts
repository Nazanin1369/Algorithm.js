export class TrieNode {
    value: string;
    end: boolean;
    children: Map<string, TrieNode>

    constructor(value?: string) {
        this.value = value;
        this.children = new Map<string, TrieNode>();
        this.end = false;
    }
}

export class Trie {

    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
        this.root.value = '#';
    }

    insert(word: string) {
        let currentNode = this.root;
        let level = 0;
        let newNode;

        for(let char of word) {
            // node exists in the trie
            if(currentNode.children.get(char)) {
                currentNode = currentNode.children.get(char);
            } else {
                // node does not exist so create a new node
                //assign the new node the the parent child
                newNode = new TrieNode(char);
                currentNode.children.set(char, newNode);
            }
            level++;


            if(level === word.length) {
                // world is done
                newNode.end = true;
                break;
            }
        }
    }

    search(word: string): boolean {
        let currenNode = this.root;
        let level = 0;

        // for every characte in the word
        for(let char of word) {
            //check if the character exist in the children of currentNode
            if(currenNode.children.get(char)) {
                // overwrite the currentNode with the child having the character
                currenNode = currenNode.children.get(char);
                level ++;
            }

            // if we tranversed all charactes and there is end on the node
            // then we found the word in the trie
            if(level === word.length && currenNode.end) {
                return true;
            }
        }
        return false;
    }

    startsWith(prefix: string): number {
        let level = 0;
        let numberOfWords = 0;
        let currentNode = this.root;

        for(let char of prefix) {
            // character exists in the current node child
            if(currentNode.children.get(char)) {
                currentNode = currentNode.children.get(char);
                level++;
            } else {
                // this prefix does not exist in the trie - invalid prefix
                return -1;
            }

            // we traversed the whole prefix and all exists
            if(level === prefix.length) {
                console.log('prefix exist on level', level, prefix.length);
                const words = this.findCompleteWords(currentNode, level);
                //numberOfWords = words.length;

            }
        }

        return numberOfWords;
    }

    print(): void {
        let currentNode = this.root;

        for(let child of currentNode.children) {
            for(let c of child.entries()) {
                let val = c[1];
                this.printRecursive(c.entries(), 0);
           }

        }

    }

    private findCompleteWords(currentNode: TrieNode, level: number): Array<string> {
        let result = [];

        for(let child of currentNode.children.entries()) {
            const node = child[1]
            console.log(node)
            if(node.end) {
                // this is a full word
                console.log(node)
                result.push(node.value);
            }
        }

        return result;
    }

    private printRecursive(children, level) {
        for(let c of children) {
            let val = c[1];
            if(typeof val !== 'string' && val.children) {
                console.log('char: ', val.value, '-', level)
                children = val.children.entries();
                this.printRecursive(children, level++);
            }

       }
    }
}

const words = ['apple', 'aplication'];

let trie = new Trie();
trie.insert('apple');
trie.insert('apply');
//trie.print();

//console.log(trie.search('apple'));
//console.log(trie.search('app'));
//console.log(trie.search('apeal'));

console.log(trie.startsWith('app'));

