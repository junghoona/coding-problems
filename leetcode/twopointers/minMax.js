// IBM Coding Assessment Problem

// Given an array x of integers, and an array operations of string operations,
// Assume you have an empty integer array named elements.
// For string operation 'push', push x[i] into elements. 
// For string operation 'pop', remove x[i] from nums
// Add the product of maximum and minimum value from the nums into elements

// Assumptions Made: array x, operations are of equal length

function minMax(operations, x) {
    let left = 0;
    let right = operations.length;
    let nums = [];
    let temp = [];
    let min = 0;
    let max = 0;
    let product = 1;

    while (left < right) {
        if (operations[left] === 'push') {
            nums.push(x[left]);
            temp.push(x[left]);
        } else if (operations[left] === 'pop') {
            temp.splice(temp.indexOf(x[left]), 1);
        }
        left++;
    }

    min = Math.min(...temp);
    max = Math.max(...temp);
    product = min * max;
    nums.push(product);

    return nums;
}

console.log(minMax(['push', 'push', 'push', 'pop'], [1, 2, 3, 1]))