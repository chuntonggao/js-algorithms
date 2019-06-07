// 455. Assign Cookies

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function(g, s) {
    g.sort((a, b) => (a - b));
    s.sort((a, b) => (a - b));
    let numContentChildren = 0;
    while (s.length && g.length) {
        if (s[0] >= g [0]) {
            numContentChildren ++;
            g.shift();
        }
        s.shift();
    }
    return numContentChildren;
};