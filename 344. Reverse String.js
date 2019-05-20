// 344. Reverse String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
	if (s.length <= 1) return;
	const first = s[0];
	s.splice(0, 1);
	reverseString(s);  
	s.push(first);
};