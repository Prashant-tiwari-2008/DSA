// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)


const word1 = "abc";
const word2 = "bca"; // true

const word3 = "a"
const word4 = "aa" // false

const word5 = "cabbba"
const word6 = "abbccc" // true
// working solution
const closeString = (word1, word2) => {
    if (word1.length !== word2.length) return false

    let hash1 = {}
    let hash2 = {}

    for (let ele of word1) {
        hash1[ele] = hash1[ele] + 1 || 1;
    }

    for (let ele of word2) {
        if (hash1[ele]) {
            hash2[ele] = hash2[ele] + 1 || 1;
        } else {
            return false
        }
    }

    // Compare sorted frequency values
    const freqValues1 = [...Object.values(hash1)].sort((a, b) => a - b);
    const freqValues2 = [...Object.values(hash2)].sort((a, b) => a - b);

    return freqValues1.toString() === freqValues2.toString()
}

console.log(closeString(word1, word2))
console.log(closeString(word3, word4))
console.log(closeString(word5, word6))

// chatgpt solution not working 
const closeStrings = (word1, word2) => {
    if (word1.length !== word2.length) return false;

    const freq1 = new Map();
    const freq2 = new Map();

    // Count frequencies of characters in word1 and word2
    for (let char of word1) {
        freq1.set(char, (freq1.get(char) || 0) + 1);
    }
    for (let char of word2) {
        freq2.set(char, (freq2.get(char) || 0) + 1);
    }

    // Check if both strings have the same set of characters
    if (new Set([...freq1.keys()]).toString() !== new Set([...freq2.keys()]).toString()) {
        return false;
    }

    // Compare sorted frequencies
    const sortedFreq1 = [...freq1.values()].sort((a, b) => a - b);
    const sortedFreq2 = [...freq2.values()].sort((a, b) => a - b);

    return sortedFreq1.toString() === sortedFreq2.toString();
};

console.log(closeStrings(word1, word2), "chatgpt")
console.log(closeStrings(word3, word4), "chatgpt")
console.log(closeStrings(word5, word6), "chatgpt")


// best = 1
if (word1.length !== word2.length) return false

let hash1 = {}
let hash2 = {}

for (let ele of word1) {
    hash1[ele] = hash1[ele] + 1 || 1;
}

for (let ele of word2) {
    if (hash1[ele]) {
        hash2[ele] = hash2[ele] + 1 || 1;
    } else {
        return false
    }
}

// Compare sorted frequency values
const freqValues1 = [...Object.values(hash1)].sort((a, b) => a - b);
const freqValues2 = [...Object.values(hash2)].sort((a, b) => a - b);

return freqValues1.toString() === freqValues2.toString()

// best == 2
var closeStrings_1 = function (word1, word2) {
    if (word1.length !== word2.length) return false;
    if (word1 == word2) return true

    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);
    // Count frequencies for both words
    for (let i = 0; i < word1.length; i++) {
        freq1[word1.charCodeAt(i) - 97]++
        freq2[word2.charCodeAt(i) - 97]++
    }

    for (let i = 0; i < 26; i++) {
        if (freq1[i] > 0 && freq2[i] == 0) return false
        if (freq2[i] > 0 && freq1[i] == 0) return false
    }

    let str1 = freq1.sort().join('')
    let str2 = freq2.sort().join('')

    return str1 == str2
};