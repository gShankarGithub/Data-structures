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
    //Check if Empty
    isEmpty() {
        return this.size === 0
    }
    //Get Size of linked list
    getSize() {
        return this.size
    }
    // Add Node to beginning of linked list 
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

    //Add node to end of linked list
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

    //Insert node to index 
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return null
        }
        else if (index === 0) {
            this.prepend(value)
        } else {
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
            this.size++
        }
    }
//Remove node from index
    remove(index) {
        if (index < 0 || index > this.size) {
            return null
        }
        let removedVar
        if (index === 0) {
            removedVar = this.head
            this.head = removedVar.next
        }
        else {
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            removedVar = curr.next
            curr.next = removedVar.next
        }
        this.size--
        return removedVar.value
    }

    //Remove node with value as argument
    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        let removedVar
        if (this.head.value === value) {
            removedVar = this.head
            this.head = removedVar.next
        }
        else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                removedVar = prev.next
                prev.next = removedVar.next
            }
        }
        this.size--
        return value
    }
// Search for value in linked list
    search(value) {
        if (this.isEmpty()) {
            return -1
        } else {
            let i = 0
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
    }
// Reverse a linked list 
    reverse() {
        if (this.isEmpty()) {
            return null
        }
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

    // Sort linked list
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

    // Print linked list

    print() {
        if (this.isEmpty()) {
            console.log("This linked list is empty")
        } else {
            let curr = this.head
            let listValues = ""
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }

}

const list = new LinkedList()


list.print()
list.prepend(1)
list.prepend(5)
list.prepend(4)
list.prepend(2)
list.prepend(3)
list.append(6)
list.print()
console.log(list.getSize())
list.print()
list.removeValue(3)
list.print()
console.log(list.search(53));
list.reverse()
list.print()
list.sort()
list.print()


