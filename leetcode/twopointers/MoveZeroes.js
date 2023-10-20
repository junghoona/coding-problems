// Given an integer array nums, move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.

// NOTE: Do this in-place without making a copy of the array

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Runtime : O(n)
var moveZeroes = function(nums) {
    // initialize swap index
    let left = 0;
    // iterate up to nums length
    for (let i = 0; i < nums.length; i++) {
        // if current num is not 0
        if (nums[i] !== 0) {
            // swap position with swap index
            [nums[left], nums[i]] = [nums[i], nums[left]];
            left++;
        }
    }
};


nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);