// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6] // [[1,3],[4,6]]

const nums3 = [1, 2, 3, 3]
const nums4 = [1, 1, 2, 2, 5, 5, 5, 5, 5, 5] //[[3],[]]

// same complexcity as chatgpt but not clear to read // O(m+n) => time and spce
const findDifference = (nums1, nums2) => {
    let firtDiffArr = new Set();
    let secDiffArr = new Set();
    let hash = {}
    let hash1 = {}

    for (let num of nums1) { // O(n)
        hash[num] = hash[num] + 1 || 1; // O(n)
    }
    for (let num of nums2) { // O(m)
        hash1[num] = hash1[num] + 1 || 1; // O(m)
    }

    for(let key of nums2){ // O(n)
        if(!hash[key]){
            secDiffArr.add(key) // O(n)
        }
    }

    for(let key of nums1){// O(m)
        if(!hash1[key]){
            firtDiffArr.add(key) // O(m)
        }
    }
    return [firtDiffArr, secDiffArr];
}


console.log(findDifference(nums1, nums2))
console.log(findDifference(nums3, nums4))

// chatgpt Solution 
const findDifferenc_chtGPT = (nums1, nums2) => {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let firstDiffArr = [...set1].filter(num => !set2.has(num));
    let secDiffArr = [...set2].filter(num => !set1.has(num));

    return [firstDiffArr, secDiffArr];
};


// best Solution
var findDifference_Best = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    return [[...set1].filter(num => !set2.has(num)), [...set2].filter(num => !set1.has(num))];
};