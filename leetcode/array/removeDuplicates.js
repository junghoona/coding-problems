// Given an integer array nums sorted in non-decreasing order,
// remove duplicates in-place such that each unique element appears at most twice.

// The relative order of the elements should be kept the same.

// If there are k elements after removing the duplicates, 
// then the first k elements of nums should hold the final result.
// Return k after placing the final result in the first k slots of nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2] || nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}