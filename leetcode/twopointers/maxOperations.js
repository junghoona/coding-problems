// Given an integer array nums and an integer k,
// pick two numbers from the array whose sum equals k and remove them from the array.
// Return the maximum number of operations you can perform on the array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Runtime complexity: O(n)
var maxOperations = function(nums, k) {
    // sort the array in ascending order
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let count = 0;

    while (left < right) {
        if (nums[left] + nums[right] === k) {
            count++;
            left++;
            right--;
            continue;
        } 
        nums[left] + nums[right] > k ? right-- : left++;
    }
    return count;
};