// 559. Maximum Depth of N-ary Tree

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */

var maxDepth = function(root) {
    if (! root) return 0; 
    else {
        let max = 0;
        root.children.forEach(child => {
            max = Math.max(max, maxDepth(child));
        });
        return max + 1; 
    }
};