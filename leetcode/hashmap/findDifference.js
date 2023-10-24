// Given two 0-indexed integer arrays nums1 and nums2, 
// return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 not present in nums2
// answer[1] is a list of all distinct integers in nums2 not present in nums1

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

// Array Solution: O(n)
var findDifference = function(nums1, nums2) {
    let answer = [];
    let distinctNums1 = [];
    let distinctNums2 = [];

    // iterate over nums1
    for (let num of nums1) {
        if (!nums2.includes(num) && !distinctNums1.includes(num)) {
            distinctNums1.push(num);
        }
    }

    for (let num of nums2) {
        if (!nums1.includes(num) && !distinctNums2.includes(num)) {
            distinctNums2.push(num);
        }
    }
    
    answer.push(distinctNums1);
    answer.push(distinctNums2);
    return answer;
};