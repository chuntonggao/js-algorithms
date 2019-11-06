// 657. Robot Return to Origin

/**
 * @param {string} moves
 * @return {boolean}
 */

var judgeCircle = function(moves) {
	const movesArray = moves.split('');
	let x = 0, y = 0;
	movesArray.forEach(move => {
		if (move === 'R') x++;
		else if (move === 'L') x--;
		else if (move === 'U') y++;
		else if (move === 'D') y--;
	});
	return x === 0 && y === 0;
};