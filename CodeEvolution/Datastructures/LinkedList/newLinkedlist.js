class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        if (this.size === 0) return true
    }

    prepend(value) {

        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            node.next = this.head.next
            this.head.next = node
        }
    }

    insertAfter(value, target) {
        let node = new Node(value)
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                node.next = curr.next
                curr.next = node
            }
            else {
                curr = curr.next
            }

        }

    }
}