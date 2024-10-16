class Node{
    constructor(value){
        this.left =  null;
        this.value = value;
        this.right = null;
    }
    
}

class BinarySearchTree{
    constructor(){
        this.root = null;
        
    }

    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    //left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                }else{
                    //right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right
                }
            }
            
        }
    }

    lookup(value){
        if(!this.root){
            return false
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    currentNode = currentNode.left
                }else if(value > currentNode.value){
                    currentNode = currentNode.right
                }else if(value === currentNode.value){
                    return currentNode
                }
            }
        }
        return false;
    }

    remove(){

    }
}

const tree = new BinarySearchTree();
tree.insert(40)
tree.insert(20)
tree.insert(10)
// tree.insert(50)
// tree.insert(106)
// tree.insert(104)
// tree.insert(101)
// tree.insert(105)
// tree.insert(22)
// tree.insert(15)
// tree.insert(7)

// console.log(tree.lookup(104))
console.log(tree.lookup(1004))
console.log(tree);