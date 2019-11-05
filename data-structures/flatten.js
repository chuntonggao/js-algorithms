function flatten(arr) {
	let newArr = [];
	for (const e of arr) {
		if (!Array.isArray(e)) 
			newArr.push(e);
		else 
			// newArr = newArr.concat(flatten(e));
			newArr = [ ...newArr, ...flatten(e) ];
	}
	return newArr;
}
console.log(flatten([1, 2, 3, [4, 5] ]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1],[2],[3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
 