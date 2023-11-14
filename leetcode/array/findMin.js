// Given the sorted rotated array nums of unique elements, 
// return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] > nums[right]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return nums[left];
};