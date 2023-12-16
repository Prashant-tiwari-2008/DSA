class DoubleLinkedList{
    constructor(value){
        this.head = {
            prev:null,
            value:value,
            next:null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            prev:null,
            value,
            next:null
        }
        newNode.prev = this.tail
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = {
            prev : null,
            value,
            next : null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this
    }

    insert(index,value){
        const newNode = {
            prev : null,
            value,
            next:null
        }
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = holdingPointer
        holdingPointer.prev = newNode
    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode =  this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    remove(){
        
    }
}

const myDoubleLinkedList = new DoubleLinkedList(100);
myDoubleLinkedList.append(10)
myDoubleLinkedList.append(11)
myDoubleLinkedList.append(12)
myDoubleLinkedList.append(13)
myDoubleLinkedList.prepend(9)
myDoubleLinkedList.prepend(8)
myDoubleLinkedList.prepend(7)
myDoubleLinkedList.insert(2,100000)
myDoubleLinkedList.insert(3,200000)
myDoubleLinkedList.insert(8,300000)

console.log(myDoubleLinkedList.printList());