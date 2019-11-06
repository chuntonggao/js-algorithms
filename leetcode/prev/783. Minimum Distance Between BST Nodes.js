// 783. Minimum Distance Between BST Nodes

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**

 * @param {TreeNode} root
 * @return {number}
 */


// This is slow

var minDiffInBST = function(root) {
    // Level order traversal
    let nodeValues = [];
    let queue = [];
    queue.push(root);
    while (queue.length) {
        const node = queue.shift();
        nodeValues.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    console.log(nodeValues);
    let min = 9999999999999999;
    for (let i = 0; i < nodeValues.length; i ++) {
        for ( let k = i + 1; k < nodeValues.length; k ++) {
            const dist = Math.abs(nodeValues[i] - nodeValues[k]);
            if (dist < min) min = dist;
        }
    }
    return min;
};