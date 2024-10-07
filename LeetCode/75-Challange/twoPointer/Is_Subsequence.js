// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


const s = "abc";
const t = "ahbgdc"; // true

const s1 = "axc"
const t1 = "ahbgdc" // false

// my solution and it's best
const is_subsequence = (str1, str2) => {
    if (str1.length > str2.length) return false;
    let first = 0;
    for (let j = 0; j < str2.length; j++){
        if(str2[j] === str1[first]){
            first++;
        }
        if(first === str1.length)  return true;
    }
    return first === str1.length ? true : false
}

console.log(is_subsequence(s, t))
console.log(is_subsequence(s1, t1))


// old solution
var isSubsequence = function(s, t) {
    let slength = s.length;
   if(slength == 0) return true
   let i = 0;
   let j = 0
   let result = false;

   while (j < t.length) {
       if (s[i] === t[j]) {
           i++;
           result = true
       } else {
           result = false
       }
       j++;
   }
   return (i == (slength) ? true : false);
};