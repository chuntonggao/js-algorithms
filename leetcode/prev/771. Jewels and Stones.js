// 771. Jewels and Stones

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

var numJewelsInStones = function(J, S) {
	var num = 0;
	var SArray = S.split('');
	var JArray = J.split('');
	SArray.forEach(function(char) {
		if (JArray.includes(char)) {
			num ++;
		}
	});
	return num;
};

// Tests

/*
console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));
*/