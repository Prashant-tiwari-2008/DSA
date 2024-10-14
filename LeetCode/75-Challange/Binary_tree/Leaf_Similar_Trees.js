// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

const root1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]
const root2 = [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]

var leafSimilar = function (root1, root2) {
    const getLeaf = (node) => {
        let Leaf = [];
        const DFS = (node) => {
            if (!node) return
            if (!node.left && !node.right) {
                Leaf.push(node.val)
            }
            DFS(node.left);
            DFS(node.right);
        }
        DFS(node);
        return Leaf;
    }

    let FistNodeLeaf = getLeaf(root1);
    let SecondNodeLeaf = getLeaf(root2);
    // return FistNodeLeaf.toString() === SecondNodeLeaf.toString();

     if (FistNodeLeaf.length !== SecondNodeLeaf.length) return false;


     for (let i = 0; i < FistNodeLeaf.length; i++) {
         if (FistNodeLeaf[i] !== SecondNodeLeaf[i]) return false;
     }

     return true;
};