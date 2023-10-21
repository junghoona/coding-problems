// Given an integer array nums, find the subarray with the largest sum, and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let left = 0;
    let right = nums.length;
    let max = nums[0];
    let sum = 0;

    while (left < right) {
        sum += nums[left];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
        left++;
    }
    return max;
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([5,4,-1,7,8]));