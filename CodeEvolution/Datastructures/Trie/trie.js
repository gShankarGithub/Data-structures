class TrieNode {
    constructor() {
        this.children = {}
        this.EndOfWord = false
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let currentNode = this.root
        for (let i = 0; i < word.length; i++) {
            const char = word[i]
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode
            }
            currentNode = currentNode.children[char]
        }

        currentNode.EndOfWord = true
    }


    search(word) {
        let currentNode = this.root
        for (let i = 0; i < word.length; i++) {
            const char = word[i]
            if (!currentNode.children[char]) {
                return false
            }
            currentNode = currentNode.children[char]
        }
        return currentNode.EndOfWord
    }
}