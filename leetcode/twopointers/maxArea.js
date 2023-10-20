// Given an integer array height of length n
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

// NOTE: Cannot slant the container


/**
 * @param {number[]} height
 * @return {number}
 */

// Two pointer approach : O(n)
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left <= right) {
        // initialize width 
        let width = right - left;
        let vertical = 0;
        if (height[right] < height[left]) {
            vertical = height[right];
            right--;
        } else {
            vertical = height[left];
            left++;
        }

        if (vertical * width > maxArea) {
            maxArea = vertical * width;
        }
    }
    return maxArea;
};