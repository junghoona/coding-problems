// Given an integer array nums, rotate the array 
// to the right by k steps, where k is non-negative

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Two pointer Approach: O(n)
var rotate = function(nums, k) {
    let left = 0;
    let right = nums.length;
    let temp = nums.slice();
    // while left < right
    while (left < right) {
        // initialize pivot index
        let pivot = (left + k) % right;
        // swap
        [nums[pivot]] = [temp[left]];
        left++;
    }
};
