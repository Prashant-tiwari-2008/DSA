class Node{
    constructor(value){
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}
class DoubleLinkedList{
    constructor(value){
       this.head = new Node(value);
       this.tail = this.head
       this.length = 1
    }

    append(value){
        const newNode = new Node(value);
        if(this.length === 1){
         this.head.next = newNode;
         newNode.prev = this.head;
         this.tail = newNode;   
        }else{
           this.tail.next = newNode;
           newNode.prev = this.tail;
           this.tail = newNode; 
        }
        this.length++;
    }

    prepend(){

    }

    insert(){

    }

    traverseToIndex(){

    }

    remove(){

    }
}

const mydblist = new DoubleLinkedList(10);
mydblist.append(100)
mydblist.append(200)
mydblist.append(300)
mydblist.append(400)
mydblist.append(500)
console.log(mydblist);
