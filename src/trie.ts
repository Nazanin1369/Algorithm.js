export class TrieNode {
    character: string;
    isEnd: boolean;
    children: Map<string, TrieNode>

    constructor(character?: string) {
        this.character = character;
        this.children = new Map<string, TrieNode>();
    }
}

export class Trie {

    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string) {
        let children = this.root.children,
            level = 0;

        for(let char of word) {
            let node;
            if(children.get(char)) {
                node = children.get(char);
            } else {
                node = new TrieNode(char);
                children.set(char, node);
            }

            children = node.children;

            if (level++ === word.length - 1) {
                node.isLeaf = true;
            }
        }
    }

    search(word: string): boolean {
        return false;
    }
}

const words = ['apple', 'aplication'];

let trie = new Trie();
trie.insert('apple');


