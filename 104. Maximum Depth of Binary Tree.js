// 104. Maximum Depth of Binary Tree

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

var maxDepth = function(root) {
	if (! root) return 0; 
	else return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};