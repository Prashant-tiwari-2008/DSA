// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

const root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]
const targetSum = 8

var pathSum = function (root, targetSum) {
    let count = 0;
    const DFS = (node, target) => {
        if (!node) return;
        if (node.val === target) count++
        DFS(node.left, target - node.val)
        DFS(node.right, target - node.val)
    }

    const helper = (root, targetSum) => {
        if (!root) return;
        DFS(root, targetSum);
        helper(root.left, targetSum)
        helper(root.right, targetSum)
    }

    helper(root, targetSum);
    return count;
};

console.log(pathSum)

// best solution
var pathSum = function (root, targetSum) {

    // Helper function to perform DFS and count valid paths
    function dfs(node, currentSum, prefixSums) {
        if (!node) return 0;

        currentSum += node.val;
        let count = prefixSums.get(currentSum - targetSum) || 0;

        // Update the prefix sums map
        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1);

        // Continue DFS on children
        count += dfs(node.left, currentSum, prefixSums);
        count += dfs(node.right, currentSum, prefixSums);

        // Remove the current node's sum from the map (backtrack)
        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) - 1);

        return count;
    }

    // Use a map to store prefix sums and their frequencies
    const prefixSums = new Map();
    prefixSums.set(0, 1); // Base case for paths that equal targetSum exactly from the root

    return dfs(root, 0, prefixSums);
};
