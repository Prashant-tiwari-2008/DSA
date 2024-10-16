// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
// Basically, the deletion can be divided into two stages:
// Search for a node to remove.
// If the node is found, delete the node.

var deleteNode = function (root, key) {
    root = deleteBSTNode(node.root, value)
};

function deleteBSTNode(node, value) {
    if (!node) return null;

    if (value < node.value) {
        node.left = deleteBSTNode(node.left, value);
    } else if (value > node.value) {
        node.right = deleteBSTNode(node.right, value);
    } else {
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        // node with two child
        let minValue = this.findMinNode(node.right);
        node.value = minValue.value;
        node.right = deleteBSTNode(node.right, minValue.value)
    }
    return node
}

function findMinNode(node) {
    while (node && node.left) {
        node = node.left
    }
    return node;
}