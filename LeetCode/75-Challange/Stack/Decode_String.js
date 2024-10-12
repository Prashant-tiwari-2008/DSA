// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

let s = "3[a]2[bc]" // "aaabcbc"
let s1 = "3[a2[c]]" // "accaccacc"
let s2 = "2[abc]3[cd]ef" // "abcabccdcdcdef"

var decodeString = function (s) {
    let stack = [];
    let length = s.length;
    let result = '';
    let i = 0;
    while (i < length) {
        if (s[i] == ']') {
            let tempStr = '';
            let secondTop = 0;
            while (!isNaN(secondTop)) {
                let topEle = stack.pop();
                secondTop = stack.pop();
                if(isNaN(secondTop)){
                    tempStr += topEle + secondTop;
                }else{
                    tempStr += topEle.repeat(secondTop);
                    secondTop = 'a'
                }
            }
            result += tempStr;
            i++;
        } else if (s[i] !== '[') {
            let newEle = isNaN(Number(s[i])) ? s[i] : Number(s[i])
            stack.push(s[i])
            i++;
        } else {
            i++;
        }
    }
    return result
};

console.log(decodeString(s))
// console.log(decodeString(s1))
// console.log(decodeString(s2))


//chat_GPT solution
var decodeString = function(s) {
    let stack = [];
    let currentNum = 0;
    let currentStr = '';
    
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            // Build the current number (to handle multi-digit numbers like 12, 123, etc.)
            currentNum = currentNum * 10 + Number(s[i]);
        } else if (s[i] === '[') {
            // Push the current string and number onto the stack
            stack.push(currentStr);
            stack.push(currentNum);
            currentStr = '';
            currentNum = 0;
        } else if (s[i] === ']') {
            // Pop the number and previous string from the stack
            let num = stack.pop();
            let prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(num); // Build the decoded string
        } else {
            // Add the current character to the current string
            currentStr += s[i];
        }
    }
    
    return currentStr;
};
