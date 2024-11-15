// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

let prices = [7, 1, 5, 3, 6, 4] // 7
let prices1 = [1, 2, 3, 4, 5] // 4
let prices2 = [7, 6, 4, 3, 1] // 0

// best solution beat 100% 
var maxProfit = (prices) => {
    let profit = 0;
    let length = prices.length - 1;

    for (let i = 0; i < length; i++) {
        if (prices[i] < prices[i + 1]) {
            let j = i;
            while(prices[j] < prices[j+1]){
                j++;
            }
            profit += prices[j] - prices[i]
            i = j;
        }
    }
    return profit;
}

console.log(maxProfit(prices));
console.log(maxProfit(prices1));
console.log(maxProfit(prices2));

// chatgpt solution :-
var maxProfit = (prices) => {
    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            profit += prices[i + 1] - prices[i];
        }
    }

    return profit;
};
