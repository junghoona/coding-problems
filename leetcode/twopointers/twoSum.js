// Given a 1-indexed array of integers numbers that is already sorted 
// in non-decreasing order, find two numbers such that they add up 
// to a specific target number. 

// The tests are generated such that there is exactly one solution. 
// You may not use the same element twice.

// Your solution must use only constant extra space.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        if (numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1];
        } else if (numbers[left] + numbers[right] > target) {
            right--;
        } else {
            left++;
        }
    }
};