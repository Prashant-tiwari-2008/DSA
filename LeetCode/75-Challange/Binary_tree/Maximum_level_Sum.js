// Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

var maxLevelSum = function (root) {
    if (!root) return null;
    let maxSum = -Infinity;
    let resultlevel = 0;
    let level = 0;
    let queue = [root];

    while (queue.length > 0) {
        let length = queue.length;
        let levelSum = 0;
        for (let i = 0; i < length; i++) {
            let currentNode = queue.shift();
            levelSum += currentNode.val;

            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        level++;
        if (levelSum > maxSum) {
            resultlevel = level
            maxSum = levelSum;
        }
    }
    return resultlevel;
};

