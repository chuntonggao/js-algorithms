// 101. Symmetric Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function check(left, right) {
    if (left === null) return (right === null);
    if (right === null) return false;
    if (left.val !== right.val) return false;
    return check(left.right, right.left) && check(left.left, right.right);
};

var isSymmetric = function(root) {
    if (root === null) return true;
    return check(root.left, root.right);
};

