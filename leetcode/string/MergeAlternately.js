// Given two strings word1 and word2, merge the strings 
// by adding letters in alternating order, starting with word 1.
// If a string is longer than the other, append the 
// additional letters onto the end of the merged string.

// Return the merged string

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0;
    let merged = '';

    while (i < word1.length && i < word2.length) {
        merged += word1[i];
        merged += word2[i];
        i++;
    }
    if (word1.length > i) {
        merged += word1.slice(i);
    }
    if (word2.length > i) {
        merged += word2.slice(i);
    }
    
    return merged;
};

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
console.log(mergeAlternately('abcd', 'pq'));