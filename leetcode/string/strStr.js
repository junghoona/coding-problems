// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
// or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let pointer = 0;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[pointer]) {
            pointer++;
            if (pointer === needle.length) {
                return i - (pointer - 1);
            }
        } else {
            i = i - pointer;
            pointer = 0;
        }
    }
    return -1;
};

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0

// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
