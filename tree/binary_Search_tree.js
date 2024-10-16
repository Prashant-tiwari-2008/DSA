class TreeNode {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // inserting a value
    insert(value) {
        let newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }

            }
        }
    }

    //Searching => Avg time comp => O(log N)/ Worst O(N), space => O(N)
    search(value) {
        return this.searchNode(this.root, value)
    }

    searchNode(node, value) {
        if (!node) return false;
        if (value < node.value) {
            return this.searchNode(node.left, value)
        } else if (value > node.value) {
            return this.searchNode(node.right, value)
        } else {
            return true
        }
    }

    // My search solution
    search(value){
        if(!this.root){
            return false
        }else{
            let currentNode = this.root;
            while(currentNode){
                if(value < currentNode.value){
                    currentNode = currentNode.left
                }else if(value > currentNode.value){
                    currentNode = currentNode.right
                }else if(value === currentNode.value){
                    return true
                }
            }
        }
        return false;
    }

    //traversal 
    // In-order traversal : visits nodes in ascending Order(left, root right);
    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.right);
            this.inOrderTraversal(node.right);
        }
    }

    //Pre-order Traversal: Visits the root before the subtrees (root, left, right)
    preOrderTraversal(node) {
        if (node !== null) {
            console.log(node.value); // Process the node
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    //Post-order Traversal: Visits the subtrees before the root (left, right, root).
    preOrderTraversal(node) {
        if (node !== null) {
            console.log(node.value); // Process the node
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    // findMin => traversing the leftmost branch
    findMin() {
        let currentNode = this.root;
        while (currentNode && currentNode.left) {
            currentNode = currentNode.left
        }
        return currentNode.value
    }

    // findMax => traversing the rightmost branch
    findMax() {
        let currentNode = this.root;
        while (currentNode && currentNode.right) {
            currentNode = currentNode.right
        }
        return currentNode.value
    }

    // Delete a node :-while Deleting a node in a BST have to consider three cases: => complex
    // 1. the node is a leaf
    // 2. the node has one child
    // 3. the node has two children

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(node, value) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this.delete(node.left, value);
        } else if (value > node.value) {
            node.right = this.delete(node.right, value);
        }else{
            // Node with only one child or no child
            if(!node.left) return node.right;
            if(!node.right) return node.left

            // node with two children
            let minValue = this.findMinNode(node.right)
            node.value = minValue.value;
            node.right = this.deleteNode(node.rght,minValue.value)
        }
        return node;
    }

    findMinNode(node){
        while(node && node.left){
            node = node.left;
        }
        return node;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
// Example Usage
console.log(bst.search(15)); // true
console.log(bst.search(20)); // false
console.log(bst)


// Summary of Time Complexities:
// Operation	Average Time Complexity	   Worst Time Complexity
// Insert	        O(log N)      	                 O(N)
// Search	        O(log N)	                     O(N)
// Delete	        O(log N)	                     O(N)
// Traversal	     O(N)	                         O(N)
// Find Min/Max	    O(log N)	                     O(N)