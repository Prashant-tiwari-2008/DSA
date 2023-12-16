class Node{
    constructor(val){
        this.value = val,
        this.next = null
    }
}

class MyLinkedList{
    constructor(){
        this.head = new Node(10);
        this.tail = this.head;
        this.length = 0;
    }
    
    //add value at end
    append(value){
        const newNode = new Node(value);
        if(this.length === 0){
        this.head.next = newNode;
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
    }
    
    //prepend
    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    
    printList(){
        
    }
    
    //inset at specific place
    insert(index,value){
          const newNode = new Node(value);
          const leader = this.traverseToIndex(index -1 )
          newNode.next = leader.next;
          leader.next = newNode;
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

const mylinkedlist = new MyLinkedList();
mylinkedlist.append(100)
mylinkedlist.append(200)
mylinkedlist.append(300)
mylinkedlist.append(400)
mylinkedlist.prepend(1)
mylinkedlist.insert(1,5000)
mylinkedlist.remove(5000);
console.log(mylinkedlist)