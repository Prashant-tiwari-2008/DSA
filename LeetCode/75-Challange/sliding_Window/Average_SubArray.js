// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

let nums = [1, 12, -5, -6, 50, 3]
let k = 4 // 12.75000

let nums1 = [5]
let k1 = 1 // 5.000000

const findMaxAverage = (array, k) => {
    let average;
    let sum = 0;

    for(let i = 0; i < k; i++) {
        sum += array[i];
    }
    average = sum / k;

    for(let i = k; i < array.length; i++) {
        sum = sum + array[i] - array[i - k];
        let newAverage = sum / k
        if(newAverage > average) {
            average = newAverage;
        }
    }

    return average
}

console.log(findMaxAverage(nums, k));
console.log(findMaxAverage(nums1, k1));

// chatGPT solution
const findMaxAverage_chatGPT = (array, k) => {
    let maxSum = 0, currentSum = 0;

    // Calculate the sum of the first subarray of length k
    for (let i = 0; i < k; i++) {
        currentSum += array[i];
    }
    maxSum = currentSum;

    // Use the sliding window to calculate the sum of other subarrays of length k
    for (let i = k; i < array.length; i++) {
        currentSum = currentSum + array[i] - array[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    // Return the maximum average
    return maxSum / k;
};