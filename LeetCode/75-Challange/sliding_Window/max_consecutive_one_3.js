// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
const k = 2;
// ouput - 6 => [1,1,1,0,0,1,1,1,1,1,1]

const nums1 = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
const k1 = 3;
// output - 10 => [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]


// chatGPT solution
const longestOnes = (nums, k) => {
    let left = 0;
    let maxConsecutiveOnes = 0;
    let zeroCount = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        if (zeroCount > k) {
            if(nums[left] === 0){
                zeroCount--;
            }
            left++;
        }
        maxConsecutiveOnes = Math.max(maxConsecutiveOnes, (right - left) + 1)
    }
    return maxConsecutiveOnes
}


console.log(longestOnes(nums, k))
console.log(longestOnes(nums1, k1))