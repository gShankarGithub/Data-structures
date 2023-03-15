// Circular queue 

class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity
        this.items = new Array(capacity)
        this.currentLength = 0
        this.rear = -1
        this.front = -1
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    isEmpty() {
        return this.currentLength === 0
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = this.rear + 1
            this.items[this.rear] = element
            this.currentLength += 1
            if (this.front == -1) {
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = this.front + 1
        this.currentLength += 1
        if (this.isEmpty()) {
            this.rear = -1
            this.front = -1
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        }
        else {
            let i
            let str = ""
            for (i = this.front; i !== this.rear; (i = i + 1) % this.capacity) {
                str += this.items[i] + " "
            }
            str = str + this.items[this.rear]
            console.log(str)
        }
    }
}

const queue = new CircularQueue()
queue.enqueue(12)
queue.enqueue(14)
queue.enqueue(15)
queue.enqueue(18)
queue.dequeue()
queue.print()



console.log(queue.peek());


