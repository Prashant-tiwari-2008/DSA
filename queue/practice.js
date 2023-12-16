console.log("Queue section")

class QNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}


class MyCustomeQueue {
    constructor() {
        this.frontEnd = null;
        this.rearEnd = null;
        this.length = 0;
    }

    //inserting element
    enqueue(val) {
        let newValue = new QNode(val);
        if (this.length === 0) {
            this.frontEnd = newValue;
            this.rearEnd = newValue;
            this.length++;
        } else {
            this.rearEnd.next = newValue;
            this.rearEnd = this.rearEnd.next;
            this.length++;
        }
        return this
    }

    dequeue() {
        let firstValue = this.frontEnd;
        this.frontEnd.next = this.frontEnd;
        this.length--;
        return firstValue;
    }
}

const mQueue = new MyCustomeQueue();

mQueue.enqueue(10)
mQueue.enqueue(20)
mQueue.enqueue(30)
mQueue.enqueue(5)
console.log(mQueue)
console.log(mQueue.dequeue())
console.log(mQueue)

