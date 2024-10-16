// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

const root = [1, 2, 3, null, 5, null, 4] // [1,3,4]
const root1 = [1, null, 3] // [1,3]
const root2 = [] // []

var rightSideView = function (root) {
    if (!root) { return }

    let queue = [root];
    let result = [];

    while (queue.length > 0) {
        let length = queue.length;
        let rightNode;

        for (let i = 0; i < length; i++) {
            let currentNode = queue.shift();
            rightNode = currentNode.val
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        result.push(rightNode)
    }
    return result;
};


// best solution
var rightSideView = function(root) {
    let result = [];
    let outerQueue = [root];
    if (root != null) {
       result.push(root.val);
    }
   
    while(outerQueue.length > 0) {
      let q = [];
      for(const nd of outerQueue) {
         if (nd == null) continue;
         if (nd.left != null) {
            q.push(nd.left);
         }
         if (nd.right != null) {
            q.push(nd.right);
         }
      }
      if (q.length > 0) {
         result.push(q.at(-1).val);
      }
      outerQueue = q;
    } 
    return result;
 };