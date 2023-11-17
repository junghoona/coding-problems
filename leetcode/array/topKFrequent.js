// Given an integer array nums and an integer k, 
// return the k most frequent elements. 

// You may return the answer in any order.


// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let counts = {}
    let topFreq = [];

    // set keys/values in counts obj
    for (let i = 0; i < nums.length; i++) {
        if (counts[nums[i]] === undefined) {
            counts[nums[i]] = 0;
        }
        counts[nums[i]]++;
    }

    // sort nums by frequency
    let topKNums = Object.values(counts).sort(function(a, b) {return b - a}).slice(0, k);

    // iterate over topKNums.length
    for (let j = 0; j < topKNums.length; j++) {
        let topNum = parseInt(Object.keys(counts).find(key => counts[key] === topKNums[j]));
        topFreq.push(topNum);
        delete counts[topNum];
    }

    return topFreq;
}