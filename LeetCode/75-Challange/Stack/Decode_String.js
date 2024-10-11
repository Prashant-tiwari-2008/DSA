// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

let s = "3[a]2[bc]" // "aaabcbc"
let s1 = "3[a2[c]]" // "accaccacc"
let s2 = "2[abc]3[cd]ef" // "abcabccdcdcdef"

var decodeString = function (s) {
    let result = "";
    let length = s.length - 1;
    for (let i = length; i >= 0; i--) {
        
    }
};

console.log(decodeString(s))
console.log(decodeString(s1))
console.log(decodeString(s2))
