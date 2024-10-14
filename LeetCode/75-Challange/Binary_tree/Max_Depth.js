// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

let root = [3, 9, 20, null, null, 15, 7] // 3
let root1 = [1, null, 2] // 2


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var maxDepth = function (root) {
    if(root === null) return 0;
    const leftDepath = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepath,rightDepth) + 1;
};