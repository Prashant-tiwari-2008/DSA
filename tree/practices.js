class Node{
    constructor(value){
        this.right = null;
        this.value = value;
        this.left = null;
    }
}

class MyCustomTree{
    constructor(){
        this.root;
    }

    insert(value){
        debugger
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode
        }else{
            let currentNode = this.root;
            while(true){
                if(newNode.value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    // currentNode.left = currentNode
                    currentNode = currentNode.left;
                }else{
                    if(!currentNode.right){
                        currentNode.right = newNode
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
        return this;
    }
}

const myTree = new MyCustomTree();
myTree.insert(40)
myTree.insert(20)
myTree.insert(10)
myTree.insert(50)
myTree.insert(106)
myTree.insert(104)
myTree.insert(101)
myTree.insert(105)
myTree.insert(22)
myTree.insert(15)
myTree.insert(7)
console.log(myTree);
