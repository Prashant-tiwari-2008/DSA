// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

let str1 = "XYZABCABC"
let str2 = "qABC"; //ABC

let str3 = "ABABAB"
let str4 = "ABAB" // AB

let str5 = "LEET"
let str6 = "CODE"

// first solution = wrong solution = i did not get the answer
const gcdOfStrings = (str1, str2) => {
    let string = str1.length > str2.length ? str2 : str1
    let result = '';
    for (let i = 0; i < str2.length; i++) {
        for (let j = 0; j < str1.length; j++) {
            if(str2[i] === str1[j]){
                if(!result.includes(str2[i])){
                    result += str2[i]
                }
                i++
            }
        }
    }
    return result
}

// console.log(gcdOfStrings(str1, str2))
// console.log(gcdOfStrings(str3, str4))
console.log(gcdOfStrings(str5, str6))


var gcdOfStrings1 = function(str1, str2) {
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    };
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    const gcdLength = gcd(str1.length, str2.length);
    return str1.substring(0, gcdLength);
};