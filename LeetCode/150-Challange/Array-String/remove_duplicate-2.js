// Given an integer array nums sorted in non - decreasing order, remove some duplicates in -place such that each unique element appears at most twice.The relative order of the elements should be kept the same.


let nums = [1, 1, 1, 2, 2, 3] // 5, nums = [1,1,2,2,3,_]
let nums1 = [0, 0, 1, 1, 1, 1, 2, 3, 3] // 7, nums = [0,0,1,1,2,3,3,_,_]
let nums2 = [0,0,0,0,0];

// worst solution  => O(n2) due to splice method use 
const removeDuplicates = (arr) => {
    let length = arr.length;
    let count = 0;
    let preVal = arr[0];
    for (let i = 0; i < length; i++) {
        debugger
        if (preVal !== arr[i]) {
            preVal = arr[i];
            count = 1;
        } else if (preVal === arr[i] && count < 2) {
            count++;
        } else {
            arr.splice(i, 1); 
            i--;
            length--;
        }
    }
    return arr
}

//two pointer
const removeDuplicates_my = (nums) => {
    
}



console.log(removeDuplicates_gpt(nums))
console.log(removeDuplicates_gpt(nums1))
console.log(removeDuplicates_gpt(nums2))

// two pointer chatGPT solution
const removeDuplicates_gpt = (arr) => {
    if (arr.length <= 2) return arr.length;

    let j = 1; // Pointer for placing valid elements
    let count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        // If count is <= 2, we can include the element
        if (count <= 2) {
            arr[j] = arr[i];
            j++;
        }
    }

    // Trim the array to the valid length
    arr.length = j;
    return arr;
};


// console.log(removeDuplicates_gpt(nums))
// console.log(removeDuplicates_gpt(nums1))
// console.log(removeDuplicates_gpt(nums2))