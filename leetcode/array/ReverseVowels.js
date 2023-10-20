// Given a string s, reverse only all the vowels in the string and return it.

/**
 * @param {string} s
 * @return {string}
 */

// Two pointers method : O(n)
var reverseVowels = function(s) {
    // define vowels
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    // split s into an array of letters
    let letters = s.split('');
    // initialize left, right
    let left = 0;
    let right = s.length;
    // while left < right
    while (left < right) {
        // if letters[left] is a vowel
        if (vowels.includes(letters[left])) {
            // if letters[right] is a vowel
            if (vowels.includes(letters[right])) {
                // swap letters
                [letters[left], letters[right]] = [letters[right], letters[left]];
                left++;
                right--;
            } else {
                right--;
            }
        } else {
            left++;
        }
    }
    // return letters.join('')
    return letters.join('');
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));