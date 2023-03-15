// Here queue is implemented using objects replacing array.


class Queue {
    constructor() {
        this.items = {}
        this.front = 0
        this.rear = 0
    }

    enqueue(value) {
        this.items[this.rear] = value
        this.rear++
    }

    dequeue() {
        let num = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return num
    }

    peek() {
        return this.items[this.front]
    }

    isEmpty(){
        return this.rear - this.front ===0
    }

    getSize(){
        return this.rear - this.front
    }

    print(){
        console.log(this.items)
    }
}

//Time complexity is o(n)

const queue = new Queue()
console.log(queue.isEmpty());
queue.enqueue(555)
queue.enqueue(556)
console.log(queue.isEmpty());

queue.enqueue(5)
queue.enqueue(54)
queue.enqueue(53)
queue.enqueue(15)
queue.print()
console.log(queue.getSize());
