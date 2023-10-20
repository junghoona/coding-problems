// Given an array of integers 'nums', there is a sliding window of size k 
// which is moving from the very left of the array to the very right.

// You can only see k numbers in the window. 
// Each time the sliding window moves right by one position.
// Return the max sliding window.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Brute force
var maxSlidingWindow = function(nums, k) {
    let left = 0;
    let window = [];
    // while left + k <= nums.length
    while (left + k <= nums.length) {
        window.push(Math.max(...nums.slice(left, left + k)));
        left++;
    }
    return window;
};

// Solution : Timeout exceeded -> O(n^2) 

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
console.log(maxSlidingWindow([1], 1));