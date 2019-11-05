// 938. Range Sum of BST

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

var rangeSumBST = function(root, L, R) {
	var sum = 0;
	if(root === null) {
		return 0;
	}
	if(root.val >= L && root.val <= R) {
		sum += root.val;
		console.log(`I added ${root.val}`);
	} 
	else {
		console.log(`I didn't add ${root.val}`);
	}
	if(root.left !== null) {
		sum += rangeSumBST(root.left, L, R);
	}
	if(root.right !== null) {
		sum += rangeSumBST(root.right, L, R);
	}
	return sum;
};

// Tests

/*
var TreeNode = function(val) {
	this.val = val;
	this.left = this.right = null;    
};

var node10 = new TreeNode(10); // root
var node5 = new TreeNode(5);
var node15 = new TreeNode(15);
var node3 = new TreeNode(3);
var node7 = new TreeNode(7);
var node13 = new TreeNode(13);
var node18 = new TreeNode(18);
var node1 = new TreeNode(1);
var node6 = new TreeNode(6);
node10.left = node5;
node10.right = node15;
node5.left = node3;
node5.right = node7;
node15.left = node13;
node15.right = node18;
node3.left = node1;
node7.left = node6;

console.log(rangeSumBST(node10, 6, 10)); // expected: 23
*/
