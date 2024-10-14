// Binary Tree =>  it does not maintain any specific order between parent and child nodes.In this version of the Binary Tree, nodes are inserted based on a level-order (breadth-first) approach, meaning new nodes are added from left to right at the next available position.


//Tree Traversal:- Traversal means visiting all the nodes of a tree in a specific manner. There are several common tree traversal methods:
//1. Inorder Traversal (Left, Root, Right)
//2. Preorder Traversal (Root, Left, Right)
//3. Postorder Traversal (Left, Right, Root)
//4. Level-order Traversal (Breadth-First): Visit the nodes level by level, from left to right. It uses a queue to traverse the tree in a breadth-first manner.


// 2. Delete Operation in a Binary Tree
// To delete a node in a binary tree, the general approach is to:

// Find the node to delete.
// Replace it with the deepest (rightmost) node in the tree.
// Remove the deepest node from its original location.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        // if Tree is empty, the new Node become the root
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        // Use a queue to traverse the Tree level by level(Breadth-first Search)
        const queue = [this.root];
        while (queue.length > 0) {
            let currentNode = queue.shift();

            //if left child is empty, insert there
            if (currentNode.left === null) {
                currentNode.left = newNode;
                return
            } else {
                queue.push(currentNode.left);
            }

            // if right child is empty, insert there
            if (currentNode.right === null) {
                currentNode.right = newNode;
                return
            } else {
                queue.push(currentNode.right)
            }
        }
    }

    //Traversing
    // 1.  Inorder Traversal (Left, Root, Right) => DFS(Depth first search) with recurrsion
    inorderTraversal(node) {
        if (node === null) return;
        this.inorderTraversal(node.left);
        console.log(node.value, "In order");
        this.inorderTraversal(node.right);
    }

    //1. Inorder Traversal => Iterative Implementation
    inorderTraversal_1() {
        if (this.root === null) return
        const stack = [];
        let currentNode = this.root;

        while (stack.length > 0 || currentNode !== null) {
            while (currentNode !== null) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            }
            currentNode = stack.pop();
            console.log(currentNode.value);
            currentNode = currentNode.right
        }
    }


    //2.Preorder Traversal (Root, Left, Right) => DFS(Depth first search)
    preorderTraversal(node) {
        if (node === null) return;
        console.log(node.value, "Pre order")
        this.preorderTraversal(node.left);
        this.preorderTraversal(node.right);
    }

    // 2.Preorder Traversal  => Iterative Implementation => self write
    preorderTraversal_1() { }
    //3. Postorder Traversal (Left, Right, Root) => DFS(Depth first search)
    postorderTraversal(node) {
        if (node === null) return;
        this.preorderTraversal(node.left);
        this.preorderTraversal(node.right);
        console.log(node.value, "Post order")
    }

    // 3.PostOrder Traversal  => Iterative Implementation => self write
    postorderTraversal_1() { }

    //IMP- 4.Level-order traversal (Breadth-First Search)
    levelOrderTraversal() {
        if (this.root === null) return;

        const queue = [this.root]
        while (queue.length > 0) {
            let currentNode = queue.shift();
            console.log(currentNode.value)

            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
    }

    // Search method (Level-Order traversal, BFS)
    search(value) {
        if (this.root === null) return false;

        const queue = [this.root];
        while (queue.length > 0) {
            let currentNode = queue.shift();

            // Check if the current node has the value
            if (currentNode.value === value) {
                return true;
            }

            // Continue to check left and right subtrees
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        return false; // If the value is not found in the tree
    }


    // Delete  => NOT IMPORTANT
    // Steps:
    // First, find the node to delete.
    // Traverse the tree to find the deepest node.
    // Replace the target node with the deepest node.
    // Finally, delete the deepest node.

    // Find the deepest node
    findDeepestNode() {
        if (this.root === null) return null;

        const queue = [this.root];
        let currentNode = null;

        while (queue.length > 0) {
            currentNode = queue.shift();

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        return currentNode;
    }

    // Delete the deepest node
    deleteDeepestNode(deepestNode) {
        if (this.root === null) return null;

        const queue = [this.root];
        while (queue.length > 0) {
            let currentNode = queue.shift();

            if (currentNode === deepestNode) {
                currentNode = null;
                return;
            }

            if (currentNode.left) {
                if (currentNode.left === deepestNode) {
                    currentNode.left = null;
                    return;
                } else {
                    queue.push(currentNode.left);
                }
            }

            if (currentNode.right) {
                if (currentNode.right === deepestNode) {
                    currentNode.right = null;
                    return;
                } else {
                    queue.push(currentNode.right);
                }
            }
        }
    }

    // Delete method
    delete(value) {
        if (this.root === null) return null;

        if (this.root.left === null && this.root.right === null) {
            if (this.root.value === value) {
                this.root = null;
            }
            return;
        }

        const queue = [this.root];
        let nodeToDelete = null;
        let currentNode = null;

        // Find the node to delete and traverse the tree at the same time
        while (queue.length > 0) {
            currentNode = queue.shift();

            if (currentNode.value === value) {
                nodeToDelete = currentNode;
            }

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        if (nodeToDelete !== null) {
            // Find the deepest node
            let deepestNode = this.findDeepestNode();

            // Replace the node to delete with the deepest node's value
            nodeToDelete.value = deepestNode.value;

            // Delete the deepest node
            this.deleteDeepestNode(deepestNode);
        }
    }
}

let BTree = new BinaryTree();
BTree.insert(10);
BTree.insert(20);
BTree.insert(30);
BTree.insert(40);
BTree.insert(50);
BTree.insert(60);
BTree.insert(70);
BTree.insert(80);
BTree.insert(90);
BTree.insert(110);
BTree.insert(120);
BTree.insert(130);
BTree.insert(140);
BTree.insert(150);
console.log(BTree, "btree")
// BTree.inorderTraversal(BTree.root.left);
// BTree.preorderTraversal(BTree.root.left);
// BTree.postorderTraversal(BTree.root.left);
// BTree.levelOrderTraversal();

// <!-- Choosing the Right Traversal:
// In-order: Use this when working with binary search trees or when you need to retrieve nodes in sorted order.
// Pre-order: Use this when you need to process the root node first, or when you’re constructing or cloning a tree.
// Post-order: Use this when you need to process the children before the parent, for example in tree deletion, postfix evaluation, or solving bottom-up problems. -->