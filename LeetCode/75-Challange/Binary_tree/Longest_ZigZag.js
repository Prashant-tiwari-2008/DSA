// A ZigZag path for a binary tree is defined as follow:

// Choose any node in the binary tree and a direction (right or left).
// If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
// Change the direction from right to left or from left to right.
// Repeat the second and third steps until you can't move in the tree.
// Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).
// Return the longest ZigZag path contained in that tree.

const root = [1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1] // 3
const root1 = [1, 1, 1, null, 1, null, null, 1, 1, null, 1] //4
const root2 = [1] // 0

var longestZigZag = function (root) {
    let maxLength = 0;

    const DFS = (node, isLeft, length) => {
        if (!node) return;

        maxLength = Math.max(maxLength, length);
        if (isLeft) {
            DFS(node.left, true, 1);
            DFS(node.right, false, length + 1)
        } else {
            DFS(node.left, true, length + 1);
            DFS(node.right, false, 1)
        }
    }

    DFS(root.left, true, 1)
    DFS(root.right, false, 1)

    return maxLength
};
