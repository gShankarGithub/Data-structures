// Queue Datastructure implementation

class Queue {
    constructor() {
        this.items = []
    }

    enqueue(value) {
        this.items.push(value)
    }

    dequeue() {
        return this.items.shift()
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.items[0]
    }

    isEmpty(){
        return this.items.size === 0
    }

    size(){
        return this.items.length
    }

    print(){
        return this.items.toString()
    }
}



const queue = new Queue()
queue.enqueue(10)
queue.enqueue(11)
queue.enqueue(12)
queue.enqueue(13)
queue.enqueue(14)
queue.enqueue(16)
queue.enqueue(18)
queue.dequeue()

console.log(queue.print())
console.log(queue.peek());


