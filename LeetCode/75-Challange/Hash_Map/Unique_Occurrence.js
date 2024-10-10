// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

const arr = [1, 2, 2, 1, 1, 3] // true
const arr1 = [1, 2]

// brut force approach
const uniqueOccurrences = (arr) => {
    let hash = {}
    let occurrences = []
    for (let ele of arr) {
        hash[ele] = hash[ele] + 1 || 1
    }
    for (let key in hash) {
        if (occurrences.includes(hash[key])) {
            return false
        } else {
            occurrences.push(hash[key])
        }
    }
    return true
}

console.log(uniqueOccurrences(arr))
console.log(uniqueOccurrences(arr1))


// chatGpt soution
// using set as set Checking for an element in a Set is O(1) on average, as opposed to O(k) for checking with .includes() in an array.
const uniqueOccurrences_chatGpt = (arr) => {
    let hash = {};
    let occurrencesSet = new Set();


    for (let ele of arr) {
        hash[ele] = (hash[ele] || 0) + 1;
    }

    for (let count of Object.values(hash)) {
        if (occurrencesSet.has(count)) {
            return false;
        }
        occurrencesSet.add(count);
    }

    return true;
}
