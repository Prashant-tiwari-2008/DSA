// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

const nums = [2, 3, 1, 1, 4]; // 2
const nums1 = [2, 3, 0, 1, 4]; // 2
const nums2 = [1, 2, 1, 1, 1] // 3
const nums3 = [0]; // 0
const nums4 = [2, 0, 2, 0, 1]; // 2
const nums5 = [4, 1, 1, 3, 1, 1, 1]; // 2


// wrong solution
const jump = (nums) => {
    let maxValue = 0
    let minLength = 0
    let length = nums.length;
    if (length === 1) return 0

    for (let i = 0; i < length; i++) {
        let temp = maxValue + nums[i];
        if (temp > maxValue) {
            maxValue = temp;
            minLength++;
        }
        if (maxValue >= length - 1) {
            return minLength;
        }
    }
}


console.log(jump(nums))
console.log(jump(nums1))
console.log(jump(nums2))
console.log(jump(nums3))
console.log(jump(nums4))

