// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.


const s = "IceCreAm" // "AceCreIm"
const s1= "leetcode" //"leotcede"

const reverseVowels = (str) => {
    let v = ['a','e','i','o','u']
    let left = 0;
    let right = str.length - 1;
    let temp = str.split('');

    while(left < right){
        debugger
        if(!v.includes(temp[left].toLowerCase())){
            left++;
        }
        if(!v.includes(temp[right].toLowerCase())){
            right--;
        }
        if(v.includes(temp[left].toLowerCase()) && v.includes(temp[right].toLowerCase())){
            let t = temp[right];
            temp[right] = temp[left];
            temp[left] = t;
            left++;
            right--;
        }
    }
    return temp.join('');
}

console.log(reverseVowels(s));
console.log(reverseVowels(s1));


// Old solution
var reverseVowels_old = function(s) {
    s = s.split("")
   let i = 0;
   let j = s.length - 1;
   let Vowels = ['a','A','e','E','i','I','o','O','u','U'];
   while (j > i) {
       if(Vowels.includes(s[i]) && Vowels.includes(s[j])){
           let temp = s[i];
           s[i] = s[j];
           s[j] = temp
           i++;
           j--;
       }
       if(!Vowels.includes(s[i]) ){
           i++
       }
       if(!Vowels.includes(s[j])){
           j--
       }
   }
   return s.join("")
};