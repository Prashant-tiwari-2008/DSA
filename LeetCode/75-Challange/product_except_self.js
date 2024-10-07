// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// You must write an algorithm that runs in O(n) time and without using the division operation.

const nums = [1, 2, 3, 4]  // [24,12,8,6]
const nums1 = [-1, 1, 0, -3, 3] // [0,0,9,0,0]

// right solution but time limit excees for 1 test case
var productExceptSelf = function (nums) {
    let prefix = 1;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let sufix = sufixValue(nums.slice(i + 1))
        if(i > 0){
            prefix *= nums[i-1]
        }
        let currentvalue = prefix * sufix;
        result.push(currentvalue === 0 ? 0 : currentvalue);
    }
    return result;
};

const sufixValue = (nums) => {
    let result = 1;
    for (let i = 0; i < nums.length; i++) {
        result *= nums[i];
    }
    return result;
}

console.log(productExceptSelf(nums))
console.log(productExceptSelf(nums1))

// chatgpt solution
var productExceptSelf = function (nums) {
    const n = nums.length;
    let result = new Array(n).fill(1);

    // Step 1: Calculate prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;  // Store the prefix product for index i
        prefix *= nums[i];    // Update prefix product
    }

    // Step 2: Calculate suffix products and multiply with prefix products
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;  // Multiply the current result by the suffix product
        suffix *= nums[i];    // Update suffix product
    }

    return result;
};

// Example usage:
const nums2 = [1, 2, 3, 4];
console.log(productExceptSelf(nums2)); // Output: [24, 12, 8, 6]
