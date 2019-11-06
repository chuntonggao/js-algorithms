const log = console.log;

const binarySearchIterative = (arr, e) => {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);
	while(arr[middle] !== e && start <= end) {
		if(arr[middle] < e) start = middle + 1;
		else end = middle - 1;
		middle = Math.floor((start + end) / 2);
	}
	return arr[middle] === e ? middle : -1;
}

const binarySearchRecursive = (arr, e) => {
	if(arr.length === 0) return false;
	const start = 0;
	const end = arr.length - 1;
	const middle = Math.floor((start + end) / 2);
	if(arr[middle] === e) return true;
	if(e < arr[middle]) 
		return binarySearchRecursive(arr.slice(0, middle), e);
	else 
		return binarySearchRecursive(arr.slice(middle + 1), e);
}

const arr = [ 1, 2, 4, 5, 300, 900 ];
log('iterative');
log(binarySearchIterative(arr, 1));
log(binarySearchIterative(arr, 2));
log(binarySearchIterative(arr, 4));
log(binarySearchIterative(arr, 5));
log(binarySearchIterative(arr, 300));
log(binarySearchIterative(arr, 900));
log(binarySearchIterative(arr, 6));
log(binarySearchIterative([], 0));
log('recursive');
log(binarySearchRecursive(arr, 1));
log(binarySearchRecursive(arr, 2));
log(binarySearchRecursive(arr, 4));
log(binarySearchRecursive(arr, 5));
log(binarySearchRecursive(arr, 300));
log(binarySearchRecursive(arr, 900));
log(binarySearchRecursive(arr, 6));
log(binarySearchRecursive([], 0));
