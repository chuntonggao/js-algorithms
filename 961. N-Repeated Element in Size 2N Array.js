// 961. N-Repeated Element in Size 2N Array

/**
 * @param {number[]} A
 * @return {number}
 */

var repeatedNTimes = function(A) {
	let uniqueElements = [];
	for(let i = 0; i < A.length; i ++) {
		const a = A[i];
		if(uniqueElements.includes(a)) return a;
		else uniqueElements.push(a);
	}
};

// Tests

console.log(repeatedNTimes([1,2,3,3]));
console.log(repeatedNTimes([2,1,2,5,3,2]));
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));