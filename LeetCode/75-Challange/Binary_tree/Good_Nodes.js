// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

const root = [3, 1, 4, 3, null, 1, 5]

var goodNodes = function (root) {
    let count = 0;
    const DFS = (node,max) => {
        if (!node) return
        if (node.val >= max) {
            count++;
            max = node.val;
        }
        DFS(node.left,max);
        DFS(node.right,max)
    }
    DFS(root, root.val);
    return count;
};