// Given an input string s, reverse the order of the words.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

let s = "the sky is blue" // blue is the sky
let s1 = "     hello     world    " // world hello
let s2 = "a good    example" // example good a

const reverseWord = (str) => {
    str = str.trim();
    str = str.split(" ");
    let result = [];
    for (let i = (str.length - 1); i >= 0; i--) {
        if(str[i] !== ''){
            result.push(str[i])
        }
    }
    return result.join(' ');
}

console.log(reverseWord(s))
console.log(reverseWord(s1))
console.log(reverseWord(s2))


// old solution
var reverseWords_old = function(s) {
    s = s.trim();
    s = s.split(" ");
    let result = [];
    let whiteSpaceCount = 0;
    for (let i = (s.length - 1); i >= 0; i--){
        if(s[i] === ' ' && whiteSpaceCount == 0){
            result.push(s[i])
            whiteSpaceCount++;
        }else if(s[i] !== ''){
            result.push(s[i])
            whiteSpaceCount == 0;
        }
    }
    return result.join(' ');
};


//best solution
var reverseWords = function(s) {
    let words = s.split(" ");
    let newWords = words.filter((x) => x!=="").reverse().join(" ")
    return newWords.trim();
};