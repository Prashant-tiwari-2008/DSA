console.log('Tree practices');

class Node {
    constructor(val) {
        this.right = null;
        this.val = val;
        this.left = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
        } else {
            let currentNode = this.root;
            while (true) {
                if (value > currentNode.val) {
                    //right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return;
                    }
                    currentNode = currentNode.right;
                } else {
                    //left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this
                    }
                    currentNode = currentNode.left
                }
            }
        }
    }

    //searching for an element
    lookup(value) {
        //=================>>> My Solution
        // if(value == this.root.val){
        //     return this.root;
        // }else{
        //     let currentNode = this.root;
        //     while(true){
        //         if(currentNode.left && value == currentNode.left.val){
        //             return currentNode.left
        //         }else if(currentNode.right && value == currentNode.right.val){
        //             return currentNode.right;
        //         }else if(value > currentNode.val){
        //             currentNode = currentNode.right;
        //         }else if(value < currentNode.val){
        //             currentNode = currentNode.left;
        //         }
        //     }
        // }

        let currentNode = this.root;
        while (currentNode) {
            if(value > currentNode.val){
                currentNode = currentNode.right
            }else if(value < currentNode.val){
                currentNode = currentNode.left
            }else if(currentNode.val === value){
                return currentNode
            }
        }

    }

    remove(value) {

    }
}


let tree = new Tree(10);

tree.insert(40)
tree.insert(20)
tree.insert(10)
tree.insert(50)
tree.insert(106)
tree.insert(104)
tree.insert(101)
tree.insert(105)
tree.insert(22)
tree.insert(15)
tree.insert(7)


// console.log(tree.lookup(104))
console.log(tree);

console.log(tree.lookup(7))
console.log(tree.lookup(40))
console.log(tree.lookup(20))
console.log(tree.lookup(50))
console.log(tree.lookup(106))
console.log(tree.lookup(104))
console.log(tree.lookup(22))
console.log(tree.lookup(15))
