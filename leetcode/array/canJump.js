// Given an integer array nums, initially positioned at the array's first index.
// Each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let target = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if ((i + nums[i]) >= target) {
            target = i;
        }
    }
    
    if (target === 0) {
        return true;
    }
    return false;
}
