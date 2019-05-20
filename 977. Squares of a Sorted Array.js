// 977. Squares of a Sorted Array

/**
 * @param {number[]} A
 * @return {number[]}
 */

var sortedSquares = function(A) {
	for(let i = 0; i < A.length; i ++) {
		A[i] = A[i] * A[i];
	}
	
	// Insertion sort
	for(let k = 1; k < A.length; k ++) {
		const n = A[k];
		for(var j = k; j > 0; j --) {
			if(A[j - 1] > n) A[j] = A[j - 1];
			else break;
		}
		A[j] = n;
	}
	return A;
};

