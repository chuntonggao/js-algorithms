// 24. Swap Nodes in Pairs

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
	if (! head || ! head.next) return head;
	let v1, v2, v3;
	v1 = head;
	v2 = head.next;
	v3 = swapPairs(v2.next);
	v1.next = v3;
	v2.next = v1;
	head = v2;
	return head;
};