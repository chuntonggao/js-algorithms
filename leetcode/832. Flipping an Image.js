// 832. Flipping an Image

/**
 * @param {number[][]} A
 * @return {number[][]}
 */

var flipAndInvertImage = function(A) {
	for(let i = 0; i < A.length; i ++) {
		a = A[i];
		a.reverse();
		for(let k = 0; k < a.length; k ++) {
			a[k] = (a[k] === 0) ? 1 : 0; 
		}
	}
	return A;
};

// Tests

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]));
