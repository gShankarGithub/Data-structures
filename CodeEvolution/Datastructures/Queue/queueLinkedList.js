class Node{
        constructor(element){
            this.data = element;
            this.next = null;
        }
    }
    class Que{
        constructor(){
            this.rear=null;
            this.front = null;
        }
        enque(element){
            const node = new Node(element);
            if(!this.rear){
                this.front = node;
                this.rear = node;
                return
            }
            this.rear.next = node;
            this.rear = node;
    
    
        }
        deQue(){
            if(this.front == null) return " no elements";
            let item = this.front.data;
            this.front = this.front.next;
            if(!this.front){
                this.rear = null;
            }
            return item;
        }
    }
    let q1 = new Que();
    q1.enque(10);
    q1.enque(0);
    q1.deQue()
    console.log(q1);