// 905. Sort Array By Parity

/**
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParity = function(A) {
    var oddArray = [];
    var evenArray = [];
    var isEven = num => (num % 2 === 0);
    A.forEach(e => {
        if (isEven(e)) evenArray.push(e);
        else oddArray.push(e);
    });
    return evenArray.concat(oddArray);
};