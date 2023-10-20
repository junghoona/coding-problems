// Given an input string s, reverse the order of the words.
// Return a string of the words in reverse order concatenated by a single space

// NOTE: s may contain leading/trailing spaces or multiple spaces between two words.
// Returned string should only have a single space separating the words.

/**
 * @param {string} s
 * @return {string}
 */

// Solution using string methods
var reverseWords = function(s) {
    return s.split(' ')
            .filter(ch => ch)   // filter falsy str
            .reverse()
            .join(' ');
};