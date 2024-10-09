// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

const nums = [1, 1, 0, 1]; //3
const nums1 = [0, 1, 1, 1, 0, 1, 1, 0, 1]; //5
const nums2 = [1, 1, 1]; //2
const nums3 = [1, 1, 0, 0, 1, 1, 1, 0, 1]; //4

// my solution  => better 
const longestSubarray = (nums) => {
    let left = 0;
    let length = 0;
    let zeroCount = 0;
    let newZeroPosition = 0

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
            if (zeroCount === 1) {
                newZeroPosition = right
            }
        }
        if (zeroCount > 1) {
            left = newZeroPosition + 1;
            zeroCount--;
            newZeroPosition = right;
        }

        length = Math.max(length, (right - left))
    }
    return length;
}

// console.log(longestSubarray(nums))
// console.log(longestSubarray(nums1))
// console.log(longestSubarray(nums2))
// console.log(longestSubarray(nums3))


// chatgpt solution
const longestSubarray_chatGPG = (nums) => {
    let left = 0;
    let zeroCount = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left);
    }

    return maxLength;
}

console.log(longestSubarray_chatGPG(nums1))