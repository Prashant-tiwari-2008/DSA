// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

const s = "abciiidef";
let k = 3;

const s1 = "aeiou"
let k1 = 2

const s2 = "leetcode";
let k2 = 3;

// complexcity  => time -> O(n) , space =>O(1)
const maxVowels = (s, k) => { 
    let vowelCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < k; i++) { //(O(k))
        if (vowels.includes(s[i].toLowerCase())) {
            vowelCount++;
        }
    }

    let temp = vowelCount;
    for (let i = k; i < s.length; i++) { //O(n-k)
        let removedValue = s[i-k];
        let AddValue = s[i];
        if (vowels.includes(removedValue.toLowerCase())) {
            temp--;
        }
        if (vowels.includes(AddValue.toLowerCase())) {
            temp++;
        }
        vowelCount = Math.max(vowelCount, temp);
    }
    return vowelCount;
}

//console.log(maxVowels(s, k)); // Output: 3
//console.log(maxVowels(s1, k1)); // Output: 2
console.log(maxVowels(s2, k2)); // Output: 2

// chatgpt solution
var maxVowels_chatgpt = function(s, k) {
    let vowelCount = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    // Count vowels in the first window of size k
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i].toLowerCase())) {
            vowelCount++;
        }
    }

    let maxVowelCount = vowelCount;

    // Slide the window across the string
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i - k].toLowerCase())) {
            vowelCount--;
        }
        if (vowels.has(s[i].toLowerCase())) {
            vowelCount++;
        }
        maxVowelCount = Math.max(maxVowelCount, vowelCount);
    }

    return maxVowelCount;
};
