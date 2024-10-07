// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.
let word1 = "abcererer"
let word2 = "pqr"

const mergeAlternately = (str1, str2) => {
    if (str1.length == 0 && str2.length == 0) return null;
    if (str1.length == 0) return str2;
    if (str2.length == 0) return str1;

    let response = "";
    let minlength = Math.min(str1.length, str2.length)
    for (let i = 0; i <minlength; i++) {
        response += str1[i] + str2[i]
    }
    if(str1.length === minlength){
        response += str2.slice(minlength)
    }else{
        response += str1.slice(minlength)
    }
    return response;
}

console.log(mergeAlternately(word1,word2))


// best solution 
//1.
var mergeAlternately1 = function (word1, word2) {
    var result = "";
    var i, j = 0;
    for (i = 0, j = 0; i < word1.length && j < word2.length; i++, j++) {
        result += word1[i] + word2[j];
    }

    return result + word1.slice(i) + word2.slice(j);
};