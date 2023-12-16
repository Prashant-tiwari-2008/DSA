class Node {
    constructor(value){
        this.value=value,
        this.next=null
    }
}

class LinkedList{
    constructor(value){
        this.head = {
            value:value,
            next:null
        }
        this.tail = this.head;
        this.length = 1;
    }

    appned(value){
        const newNode = {
            value:value,
            next : null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = {
            value:value,
            next:this.head
        }
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array
    }

    insert(index,value){
        const newNode = {
            value,
            next:null
        }
        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(value){
        let leader = this.traverseToValue(value)
        console.log(leader,"leader");
    }

    traverseToValue(value){
        let counter = 0;
        let currentValue = this.head.value;
        let currentNode = this.head;
        while(value !== currentValue){
            currentNode = currentNode.next;
            currentValue = currentNode.value
        }
        return currentNode;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.appned(5);
myLinkedList.appned(100);
myLinkedList.appned(15);
myLinkedList.appned(102);
myLinkedList.appned(52);
myLinkedList.appned(300);
myLinkedList.prepend(200);

myLinkedList.insert(2,120);
console.log(myLinkedList.printList())