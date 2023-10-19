// Problem: Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target

// May assume that each input would have exactly one solution 
// and may not use the same element twice

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Brute Force Method: O(n^2)
var twoSum = function(nums, target) {
    // iterate up to length of nums
    for (let i = 0; i < nums.length; i++) {
        // iterate up to length of nums from i + 1
        for (let j = i + 1; j < nums.length; j++) {
            // if nums[i] + nums[j] == target
            if (nums[i] + nums[j] === target) {
                // return [i, j]
                return [i, j];
            }
        }
    }
};

// Hashmap Method: O(n)
var twoSum = function(nums, target) {
    // create counts obj
    let counts = {};
    // iterate up to nums.length
    for (let i = 0; i < nums.length; i++) {
        // if target - nums[i] is defined in counts
        if (counts[target - nums[i]] !== undefined) {
            // return [counts[target-nums[i]], i];
            return [counts[target - nums[i]], i];
        } else {
            // assign current index as value
            counts[nums[i]] = i;
        }
    }
};