// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

let nums = [2,3,1,1,4] // true
let nums1 = [3,2,1,0,4] // false
let nums2 = [1,0,1,0]


// wrong solution
var canJump = function (nums) {
    let length = nums.length
    if (length == 1) return true
    for (let i = 0; i < length - 1; i++) {
        if (nums[i] + i == 0 && i !== (length - 1)) return false
        if (nums[i] + i >= (length - 1)) {
            return true
        }
    }
    return false
};

console.log(canJump(nums))
console.log(canJump(nums1))


// => chat gpt solution
var canJump = function (nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        // If we cannot reach the current index, return false
        if (i > maxReach) return false;

        // Update the maximum reachable index
        maxReach = Math.max(maxReach, i + nums[i]);

        // If maxReach is beyond or at the last index, return true
        if (maxReach >= nums.length - 1) return true;
    }

    return false;
};

