console.log("Increasing Triplet");
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

const nums = [1, 2, 3, 4, 5];
const nums1 = [5, 4, 3, 2, 1]
const nums2 = [2, 1, 5, 0, 4, 6]


// chatGpt solution
const increasingTriplet = (array) => {
    let first = Infinity;
    let second = Infinity;
    for (let num of array) {
        if (array[num] <= first) {
            first = array[num]
        } else if (array[num] <= second) {
            second = array[n]
        } else {
            return true;
        }
    }
    return false;
}