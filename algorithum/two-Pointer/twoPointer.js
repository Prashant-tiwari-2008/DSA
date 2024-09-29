console.log("Two pointer")

//1. Given a string s, return true if it is a palindrome, false otherwise.

let str1 = "abcdcba";
let str2 = "racecar";

const isPalindorm = (str) => {
    let first = 0;
    let last = str.length - 1;
    while (first < last) {
        if (str[first] === str[last]) {
            first++;
            last--;
        } else {
            return false
        }
    }
    return true
}
// console.log(isPalindorm(str2));

// =======================================================================================
// 2.  return true if there exists a pair of numbers that sum to target, false otherwise

let nums = [1, 2, 4, 6, 8, 9, 14, 15];
let target = 13;

const hasPairWithSum = (nums, target) => {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[i] + nums[j] === target) {
            return {
                pair: [i, j],
                status: true
            }
        } else if (nums[i] + nums[j] > target) {
            j--;
        } else {
            i++;
        }
    }
    return false
}
// console.log(hasPairWithSum(nums,target))

// =======================================================================================
//3. Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.
let arr1 = [11, 13, 16, 27, 50, 51, 76, 79, 91, 92];
let arr2 = [7, 24, 40, 41, 43, 51, 56, 62, 71, 76];
const combineArray = (arr1, arr2) => {
    let result = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] === arr2[0]) {
            result.push(arr1.shift())
            result.push(arr2.shift())
        } else if (arr1[0] > arr2[0]) {
            result.push(arr2.shift())
        } else {
            result.push(arr1.shift());
        }
    }
    return [...result, ...arr1, ...arr2]
}
// console.log(combineArray(arr1, arr2));

// =======================================================================================
// 4.Given two arrays arr1[0…m-1] and arr2[0..n-1], and a number x, the task is to find the pair arr1[i] + arr2[j] such that absolute value of (arr1[i] + arr2[j] – x) is minimum

let arr3 = [1, 4, 5, 7];
let arr4 = [10, 20, 30, 40]
let target1 = 32;

// Not optimise souliton
const closestPair = (arr1, arr2, target) => {
    let pair = [];
    let mergedArray = combineArray(arr1, arr2);
    let closest = mergedArray[mergedArray.length - 1];
    let left = 0;
    let right = mergedArray.length - 1;
    while (left < right) {
        debugger
        let sumValue = mergedArray[left] + mergedArray[right];
        if (sumValue > target) {
            if (closest > sumValue - target) {
                closest = sumValue - target;
                pair[0] = mergedArray[left];
                pair[1] = mergedArray[right];
            }
            right--;
        } else if (sumValue < target) {
            if (closest > sumValue - target) {
                closest = Math.abs(sumValue - target);
                pair[0] = mergedArray[left];
                pair[1] = mergedArray[right];
            }
            left++;
        } else {
            return [left, right]
        }
    }
    return pair;
}
const closestPair1 = (arr1, arr2, target) => {
    let diff = target;
    let first = 0;
    let second = 0;
    let i = 0;
    let j = arr2.length - 1;
    while (i < (arr1.length - 1) && j > 0) {
        if (Math.abs(arr1[i] + arr2[j] - target) < diff) {
            diff = Math.abs(arr1[i] + arr2[j] - target);
            first = i;
            second = j;
        }
        if (arr1[i] + arr2[j] > target) {
            j--
        } else {
            i++
        }
    }
    return {
        position: { first, second },
        value: {
            firstValue: arr1[first],
            secondValue: arr2[second]
        }
    }
}

// console.log(closestPair1(arr3,arr4,target1))
// console.log(closestPair1(arr3, arr4, target1))

// =======================================================================================
//5. Given a sorted array arr[] and a number k, find a pair in an array whose sum is closest to k.
let arr5 = [10, 22, 28, 29, 30, 40]
let k = 54;
// Output: 22 and 30
let arr6 = [1, 3, 4, 7, 10]
let l = 15
// Output: 4 and 10

const closestSum = (arr, target) => {
    let diff = target;
    let first = 0;
    let second = 0;
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (Math.abs(arr[i] + arr[j] - target) < diff) {
            diff = Math.abs(arr[i] + arr[j] - target);
            first = arr[i]
            second = arr[j]
        }
        if (arr[i] + arr[j] > target) {
            j--;
        } else {
            i++;
        }
    }
    return { first, second }

}

// console.log(closestSum(arr5, k))
// console.log(closestSum(arr6, l))


// =======================================================================================
//6. Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.
let arr7 = [0, -1, 2, -3, 1]
// Output: [[0, -1, 1], [2, -3, 1]]
// Explanation: The triplets with zero sum are 0 + -1 + 1 = 0 and 2 + -3 + 1 = 0  


let arr8 = [1, -2, 1, 0, 5]
// Output: [[1, -2, 1]]
// Explanation: The triplets with zero sum is 1 + -2 + 1 = 0   

let arr9 = [2, 3, 1, 0, 5]
// Output: []
// Explanation: There is no triplet with 0 sum.

const threeSum = (arr) => {
    let sortedArray = arr.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = -sortedArray[i];
        let value = getPairs(i + 1, sortedArray, diff, sortedArray[i])
        result = result.concat(value);
    }
    return result
}

const getPairs = (left, arr, diff, currentEle) => {
    let right = arr.length - 1;
    let result = []
    while (left < right) {
        if (arr[left] + arr[right] === diff) {
            result.push([arr[left], arr[right], currentEle]);
            left++;
            right--;
        } else if (arr[left] + arr[right] > diff) {
            right--;
        } else {
            left++;
        }
    }
    return result
}

// console.log(threeSum(arr7))
// console.log(threeSum(arr8))
// console.log(threeSum(arr9))

// =======================================================================================
//7.  Given an array of integers, you have to find three numbers such that the sum of two elements equals the third element.
const arr10 = [5, 32, 1, 7, 10, 50, 19, 21, 2]
// Output : 21, 2, 19

const arr11 = [5, 32, 1, 7, 10, 50, 19, 21, 0]
// Output : no such triplet exist

const findTriplet = (arr) => {
    let result = [];
    arr = arr.sort((a,b) => a-b);
    console.log("arr",arr)
    for (let i = 0; i < arr.length; i++) {
        let currentEle = arr[i];
        let value = getTwos(arr,currentEle,i)
        debugger
        result = result.concat(value);
    }
    return result
}

const getTwos = (arr, currentEle,ele) => {
    let right = arr.length - 1;
    let left = 0;
    let result = [];
    while (left < right) {
        if(left === ele){
             left++;
        }else if(right === ele){
            right--;
        }
        else if (arr[left] + arr[right] == currentEle) {
            result.push([arr[left], arr[right], currentEle])
            left++;
            right--;
        } else if (arr[left] + arr[right] > currentEle) {
            right--;
        } else {
            left++;
        }
    }
    return result
}

console.log(findTriplet(arr10))
console.log(findTriplet(arr11))


// =======================================================================================
// Given an array of integers, check if there are four elements in the array with given sum.
//https://www.geeksforgeeks.org/find-four-numbers-with-sum-equal-to-given-sum/
