console.log("Sliding-window");
// https://www.geeksforgeeks.org/window-sliding-technique/

// =======================================================================
//1. To find the maximum sum of all subarrays of size K:
let arr = [100, 200, 300, 400];
let k = 2

let arr1 = [2, 3];
let j = 3

let arr2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let l = 4

const maxSum = (arr, length) => {
    if (arr.length < length) {
        return "array is not valid"
    }
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += arr[i]
    }
    for (let i = length; i < arr.length; i++) {
        let newSum = sum + arr[i] - arr[(i - length)]
        if (newSum > sum) {
            sum = newSum
        }
    }
    return sum
}

// console.log(maxSum(arr, k))
// console.log(maxSum(arr1, l))
// console.log(maxSum(arr2, l))



// =======================================================================
//2. Given an array arr[] of integers and a number x, the task is to find the smallest subarray with a sum greater than the given value. 
let arr3 = [1, 4, 45, 6, 0, 19] // add 60 to test
let target1 = 74;

let arr4 = [1, 10, 5, 2, 7]
let target2 = 9;

const smallestSubArr = (arr, target) => {
    let length = arr.length;
    let minLength = length + 1; // need to understand it's use
    let left = 0;
    let right = 0;
    let currentSum = 0;

    while (right < length) {
        while (currentSum <= target && right < length) {
            currentSum += arr[right++]
        }

        while (currentSum > target && left < length) {
            minLength = Math.min(minLength, right - left);
            currentSum -= arr[left++]
        }
    }
    return minLength === length + 1 ? 0 : minLength;
}

// console.log(smallestSubArr(arr3, target1));
// console.log(smallestSubArr(arr4, target2));



// =======================================================================
//3. Subarray with Given Sum => https://www.geeksforgeeks.org/find-subarray-with-given-sum/
let arr5 = [15, 2, 4, 8, 9, 5, 10, 23];
let target5 = 23; // output => 2,5

let arr6 = [1, 4, 0, 0, 3, 10, 5];
let target6 = 7;// output => 2,5

const subarrayWithSum = (arr, target) => {
    let length = arr.length;
    let left = 0;
    let right = 0;
    let currentSum = 0;

    while (right < length) {
        if (currentSum === target) {
            return { left: ++left, right: right }
        }
        while (currentSum < target && right <= length) {
            currentSum += arr[right++];
        }

        while (currentSum > target && left <= length) {
            currentSum -= arr[left++]
        }
    }

    return -1;
}

// console.log(subarrayWithSum(arr5, target5))
// console.log(subarrayWithSum(arr6, target6))


// =======================================================================
//4.  Given a string, find the smallest window length with all distinct characters of the given string. For eg. str = “aabcbcdbca”, then the result would be 4 as of the smallest window will be “dbca” .
let str1 = "aabcbcdbca"; //dbca
let str2 = "aaab"; // ab

const findSubStr = (str) => {
    let n = str.length;

    // find the number of distinct char in the string
    let distinctCharts = new Set(str).size;

    //Map to store the count of characters in the current window
    let charCount = new Map();
    let minLength = Infinity;
    let start = 0;
    let distinctCountInWindow = 0;


    for (let end = 0; end < n; end++) {
        // add current character to the window and update its count
        let char = str[end];
        charCount.set(char, (charCount.get(char) || 0) + 1);

        // if this char occurs for the first time in the current window, increment distinctCountWIndow
        if (charCount.get(char) === 1) {
            distinctCountInWindow++;
        }

        // when all the distinct character are found in the current window, try to shink the widnw
        while (distinctCountInWindow === distinctCharts) {
            minLength = Math.min(minLength, end - start + 1);

            // Try to remove the leftmost chart and shrink the window
            let leftChar = str[start];
            charCount.set(leftChar, charCount.get(leftChar) - 1);

            // if the count of the leftmost char become 0, we redure the distinctCountInWindow
            if (charCount.get(leftChar) === 0) {
                distinctCountInWindow--;
            }
            start++; // shrink the window
        }
    }
    return { minLength, charCount }
}

// console.log(findSubStr(str1))
// console.log(findSubStr(str2))



// =======================================================================
// 5. Given an array and an integer K, find the maximum for each and every contiguous subarray of size K.
let arr7 = [1, 2, 3, 1, 4, 5]
let target7 = 3; //3 3 4 5 

let arr8 = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13]
let target8 = 4  // 10 10 10 15 15 90 90

const maxOfContiguousSubArr = (arr, target) => {
    let length = arr.length; //9
    let left = 0;
    let right = 0;
    let max = 0;
    let result = [];

    while (right < length) {
        while (right < target) {
            if (arr[right] >= max) {
                max = arr[right]
            }
            right++;
        }
        result.push(max);

        while (right < length) {
            left++;
            for (let j = left; j <= right; j++) {
                if (arr[j] >= max) {
                    max = arr[j]
                }
            }
            result.push(max);
            right++;
        }
    }
    return result;
}

// console.log(maxOfContiguousSubArr(arr7, target7))
console.log(maxOfContiguousSubArr(arr8, target8))
// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
// =======================================================================
// ======================================================================= 