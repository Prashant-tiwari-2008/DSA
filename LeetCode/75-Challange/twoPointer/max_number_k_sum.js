// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

const nums = [1, 2, 3, 4]
const k = 5; // 2

const nums1 = [3, 1, 3, 4, 3]
const k1 = 6; // 1

// my solution  => time => 0(n log n) / space => O(1)
const maxOpertions = (nums, k) => {
    nums = nums.sort((a, b) => a - b);[1, 3, 3, 3, 4] // o(n)
    let left = 0;
    let right = nums.length - 1;
    let operation = 0
    while (left < right) { // o(n)
        if (nums[left] + nums[right] === k) {
            operation++;
            left++;
            right--
        } else if (nums[left] + nums[right] > k) {
            right--
        } else {
            left++;
        }
    }
    return operation;
}

console.log(maxOpertions(nums, k))  // o(n log n)
console.log(maxOpertions(nums1, k1))

// Object solution
const maxOpertions1 = (nums, k) => {
    let hash = {};
    let operation = 0;
    for (let num of nums) {
        let temp = k - num;
        if(hash[temp] > 0){
            operation++;
            hash[temp] = hash[temp] - 1;
        }else{
            hash[num] = (hash[num] || 0) + 1;
        }
    }
    return operation;
}

console.log(maxOpertions1(nums, k))  // o(n log n)
console.log(maxOpertions1(nums1, k1))


//chatGpt soution  => o(n)
const maxOperations_chatGpt = () => {
    let map = new Map();
    let operation = 0;

    for(let num of nums){
        let complement = k - num;
        if(map.get(complement) > 0 ){
            operation++;
            map.set(complement,map.get(complement) - 1);
        }else{
            map.set(num,(map.get(num) || 0) + 1);
        }
    }
    return operation;
}


