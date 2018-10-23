
export interface Map<T> {
    [key: string]: T;
}

export class TrieNode {
    character: string;
    isEnd: boolean;
    children: Map<TrieNode>
}

export class Trie {

    map: Map<TrieNode>;

    insert(word: string) {
        for(let char of word.split('')) {
            console.log(char)
        }
    }

    search(word: string): boolean {
        return false;
    }
}

const words = ['apple', 'aplication'];

let trie = new Trie();
trie.insert('apple');


