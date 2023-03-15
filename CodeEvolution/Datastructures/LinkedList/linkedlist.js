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
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    // Insert node to the beginning of the linked list
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    //Insert node the the end of the linked list
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    //Insert a node to the anywhere in the linked list
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return -1
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    // Remove From index

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        }
        else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    /// Remove Value from linked list 

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        }
        else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0;
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        this.head = prev
    }

    sort() {
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        while (curr.next !== null) {
            let prev = curr
            let next = curr.next
            while (next !== null) {
                if (curr.value > next.value) {
                    let temp = curr.value
                    curr.value = next.value
                    next.value = temp
                }
                prev = next
                next = next.next
            }
            curr = curr.next
        }
        return curr
    }

    print() {
        if (this.isEmpty()) {
            console.log("Is Empty linkedlist")
        } else {
            let curr = this.head
            let listValues = ""
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}


let list = new LinkedList()

console.log(list.isEmpty())
console.log(list.getSize());

list.prepend(5)
list.prepend(10)
list.prepend(11)

list.print()

list.append(200)
list.append(121)
list.print()

list.insert(55, 2)
list.insert(100, 0)
console.log(list.removeFrom(2));
list.print()

list.removeValue(200)
list.print()

console.log(list.search(55))
console.log(list.reverse())
list.print()