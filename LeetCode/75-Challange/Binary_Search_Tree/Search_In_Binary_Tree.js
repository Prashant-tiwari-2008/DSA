// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

var searchBST = function (root, val) {
    if (!root) {
        return null
    } else {
        let currentNode = root;
        while (currentNode) {
            if (val < currentNode.val) {
                currentNode = currentNode.left
            } else if (val > currentNode.val) {
                currentNode = currentNode.right
            } else if (val === currentNode.val) {
                return currentNode
            }
        }
    }
    return null;
};


// best solution 
var searchBST = function(root, val) {
    if (!root) return null; // If the tree is empty or we've reached a leaf, return null
    if (root.val === val) return root; // If the current node has the target value, return it
    
    // If the target value is less than the current node's value, search the left subtree
    if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        // Otherwise, search the right subtree
        return searchBST(root.right, val);
    }
};