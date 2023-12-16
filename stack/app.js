class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.botton = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        let newNode = new Node(value)
        if (this.length == 0) {
            this.top = newNode;
            this.botton = newNode;
        }
        newNode.next = this.top;
        this.top = newNode
        this.length++;
        return this
    }

    pop() {
        if(!this.top) return null;
        this.top = this.top.next;
        this.length--;
        return this
    }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(12);
myStack.push(13);
myStack.push(14);
myStack.pop();
myStack.pop();
console.log(myStack.peek())

console.log(myStack)