// 771. Jewels and Stones

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