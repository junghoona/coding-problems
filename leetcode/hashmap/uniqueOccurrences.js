// Given an array of integers arr, 
// return true if the number of occurrences of each value in the array is unique
// return false, otherwise.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const counts = {};
    // iterate for n in arr
    for (let num of arr) {
        if (counts[num] === undefined) {
            counts[num] = 0;
        }
        counts[num]++;
    }
    let unique = new Set(Object.values(counts));
    // if length of Array.from(set) === length of counts.values()
    if (Array.from(unique).length === Object.values(counts).length) {
        return true;
    }
    return false;
};