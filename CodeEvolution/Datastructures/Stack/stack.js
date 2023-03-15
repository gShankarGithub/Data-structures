// Stack Implementation
//Insertion and deletion in stack is of constant time complexity
class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    print(){
        return this.items.toString()
    }
}

const stack = new Stack()

stack.push(15)
stack.push(25)
stack.push(55)
stack.push(65)
stack.push(17)
stack.push(13)

console.log(stack.print());
stack.pop()
console.log(stack.print());

console.log(stack.peek());
