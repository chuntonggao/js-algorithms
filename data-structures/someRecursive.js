// SAMPLE INPUT / OUTPUT


function someRecursive(arr, fn){
	if (arr.length === 0) return false;
	return fn(arr[0]) || someRecursive(arr.slice(1), fn);
}

const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd));
console.log(someRecursive([4,6,8,9], isOdd));
console.log(someRecursive([4,6,8], isOdd));
console.log(someRecursive([4,6,8], val => val > 10));
// const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false