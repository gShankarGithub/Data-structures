//with linkedlist
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }
    push(value) {
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
    }
    pop() {
        if (this.top === null) return null;
        let item = this.top.data;
        this.top = this.top.next;
        return item;
    }
    peek() {
        return this.top ? this.top.data : null;
    }
    isEmpty() {
        return this.top.data === null;
    }
}
const s2 = new Stack();
s2.push(12);
s2.push(12);
s2.pop()
s2.push(52);
console.log(s2);
console.log(s2.peek());
console.log(s2.isEmpty());
