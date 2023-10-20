// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Two pointer method : O(n)
var isSubsequence = function(s, t) {
    // initialize pointer index
    let pointer = 0;
    // iterate for t.length
    for (let i = 0; i < t.length; i++) {
        // if t[i] === s[pointer]
        if (t[i] === s[pointer]) {
            pointer++;
        }
    }
    // return pointer === s.length
    return pointer === s.length;
};

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
