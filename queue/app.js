class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0; 
    }

    peek(){
        return this.front;
    }

    //Insertion 
    enqueue(value){
        const newNode = new Node(value);
        if(this.length == 0){
            this.front = newNode;
            this.back = newNode;
        }else{
            this.back.next = newNode;
            this.back = newNode;
        }
        this.length++;
        return this;
    }
    
    //deletion 
    dequeue(){
       this.front = this.front.next 
       this.length--;
    }
}

const myQueue = new Queue();
myQueue.enqueue(10)
myQueue.enqueue(11)
myQueue.enqueue(12)
myQueue.enqueue(13)
myQueue.dequeue()
console.log(myQueue)