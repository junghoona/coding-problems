// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place
// The order of the elements may be changed. 
// Then return the number of elements in nums which are not equal to val.

// Do the following things:

// 1. Change the array nums such that the first k elements of nums contain the elements which are not equal to val
// 2. Return k

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// Runtime Complexity: O(n)
var removeElement = function(nums, val) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
};
