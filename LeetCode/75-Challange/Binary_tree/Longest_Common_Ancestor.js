// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

const root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1 // 3

var lowestCommonAncestor = function (root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    if (left !== null && right !== null) {
        return root;
    }

    return left !== null ? left : right;
};

