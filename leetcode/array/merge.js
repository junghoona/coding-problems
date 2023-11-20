// Given: Two integer arrays nums1 and nums2, sorted in non-decreasing order
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    // sort nums1 in asc order
    nums1.sort(function(a, b) { return a - b });
}