// 804. Unique Morse Code Words

/**
 * @param {string[]} words
 * @return {number}
 */

var uniqueMorseRepresentations = function(words) {
	var encodings = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
	var count = 0;
	var transformations = [];
	
	var transformWord = function(word) {
		var transformationArray = [];
		for(var i = 0; i < word.length; i++) {
			// console.log(`${word.charAt(i)} is transformed to ${encodings[word.charCodeAt(i) - 97]}`);
			transformationArray.push(encodings[word.charCodeAt(i) - 97]);
		}
		var transformation = transformationArray.join('');
		transformations.push(transformation);
	};

	var countDifferentTransformations = function() {
		var differentTransformations = [];
		transformations.forEach(transformation => {
			if (! differentTransformations.includes(transformation)) {
				differentTransformations.push(transformation);
				count ++;
			}
		});
	};
	words.forEach(transformWord);
	countDifferentTransformations();
	return count;
};

// Testing

var count = uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
console.log(count);