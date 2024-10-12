console.log("Binary search tree");

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearch {
    constructor() {
        this.root = null
    }

    // Inserting a value at a specific position
    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
        } else {
            let currentNode = this.root;
            debugger
            while (true) {
                if (currentNode.value > newNode.value) {
                    //left child
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //right child
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    //searching for value
    loopUp(value) {
        if (this.root.value == value) {
            return this.root;
        } else {
            while (true) {
                if (this.root.value > value) {
                    if (this.root.left.value == value) {
                        return this.root.left;
                    }
                    this.root = this.root.left;
                } else {
                    if (this.root.right.value == value) {
                        return this.root.right
                    }
                    this.root = this.root.right;
                }
            }

        }
    }
}

let BST = new BinarySearch();

BST.insert(10)
BST.insert(5)
BST.insert(6)
BST.insert(2)
BST.insert(8)
BST.insert(12)
BST.insert(62)
BST.insert(15)
BST.insert(19)
BST.insert(22)
console.log(BST.loopUp(12))
console.log(BST)
