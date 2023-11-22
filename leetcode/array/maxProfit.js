// Given: Integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.

// Find and return the maximum profit you can achieve.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        let currentPrice = prices[i];
        let prevPrice = prices[i - 1];

        if (currentPrice > prevPrice) {
            profit += (currentPrice - prevPrice);
        }
    }
    return profit;
}

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 7


// Example 2:
// Input: prices = [1,2,3,4,5]
// Output: 4


// Example 3:
// Input: prices = [7,6,4,3,1]
// Output: 0